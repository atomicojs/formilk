import { c, useRef, useUpdate } from "atomico";
import {
  RouterRedirect,
  RouterSwitch,
  RouterCase,
} from "@atomico/components/router";
import { useRouteMatch } from "@atomico/hooks/use-router";
import { useSlot } from "@atomico/hooks/use-slot";
import { Group } from "../group/group.jsx";
import { Menu } from "../menu/menu.jsx";
import { MenuItem } from "../menu/menu-item.jsx";
import styleContainer from "./container.css";
import styleMarkdown from "./markdown.css";

function container({ path }) {
  const ref = useRef();
  const refSwitch = useRef();
  const slots = useSlot(ref);
  const update = useUpdate();
  /**
   * @type {Group[]}
   */
  const groups = slots.filter((child) => child instanceof Group);
  const match = useRouteMatch();
  const meta = refSwitch.current?.data?.meta;
  return (
    <host shadowDom onChangeSources={update}>
      <style>
        {styleContainer}
        {styleMarkdown}
      </style>
      <slot ref={ref}></slot>
      <RouterRedirect path={path}>
        <div class="center">
          <aside class="aside">
            <header class="aside-header">
              <slot name="aside-top"></slot>
            </header>
            <div class="aside-menu">
              <Menu>
                {groups.map(({ label, sources }) =>
                  sources.map((source) => {
                    const href =
                      source.path ||
                      encodeURI(`/${label}/${source.label}`.toLowerCase());
                    return (
                      <MenuItem href={href} active={!!match(href)}>
                        <strong>{source.label}</strong>
                      </MenuItem>
                    );
                  })
                )}
              </Menu>
            </div>
          </aside>
          <article class="article">
            {meta && (
              <header class="article-header" key="header">
                <h1>{meta.title}</h1>
              </header>
            )}
            <div class="article-content" key="content">
              <RouterSwitch ref={refSwitch} onData={update}>
                {groups.map(({ label, sources }) =>
                  sources.map((source) => (
                    <RouterCase
                      path={
                        source.path ||
                        encodeURI(`/${label}/${source.label}`.toLowerCase())
                      }
                      key={source}
                      load={source.load}
                    ></RouterCase>
                  ))
                )}
              </RouterSwitch>
            </div>
          </article>
        </div>
      </RouterRedirect>
    </host>
  );
}

container.props = {
  path: String,
};

export const Container = c(container);
