import { c, useRef, useUpdate } from "atomico";
import {
  RouterRedirect,
  RouterSwitch,
  RouterCase,
} from "@atomico/components/router";
import { useRouteMatch } from "@atomico/hooks/use-router";
import { useSlot } from "@atomico/hooks/use-slot";
import { Group } from "./group/group.jsx/index.js";
import { Menu } from "./menu/menu.jsx/index.js";
import { MenuItem } from "./menu/menu-item.jsx/index.js";

function container({ path }) {
  const ref = useRef();
  const slots = useSlot(ref);
  const update = useUpdate();
  /**
   * @type {Group[]}
   */
  const groups = slots.filter((child) => child instanceof Group);
  const match = useRouteMatch();

  return (
    <host shadowDom onChangeSources={update}>
      <style>{style}</style>
      <slot ref={ref}></slot>
      <RouterRedirect path={path} class="layout">
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
          <div class="aside-line"></div>
        </aside>
        <article class="article">
          <RouterSwitch>
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
        </article>
      </RouterRedirect>
    </host>
  );
}

container.props = {
  path: String,
};

const style = /*css*/ `
  .layout{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 18rem auto;
    background: var(--doc-background);
    grid-gap: 1rem;
  }
  .article{
    background: var(--doc-article-background);
    border-radius: 1rem;
    padding: 2rem 5rem;
    box-sizing: border-box;
    overflow: auto;
  }
  .aside{
    padding: 4rem 2rem;
    box-sizing: border-box;
    color: var(--doc-aside-color);
    position: relative;
  }
  .aside-header{
    display: flex;
    justify-content: center;
  }
  .aside-line{
    width: .1rem;
    height: 100%;
    top: 0px;
    right: 0px;
    position: absolute;
    background: currentColor;
    opacity: 0.1;
  }
  .aside-menu{
    padding: 2rem 0px;
  }
  :host{
    font-family: var(--doc-font-text);
  }
  a{
    color: unset;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-family: var(--doc-font-title);
  }
  h1{
    font-size: 3.125rem;
  }
  h2{
    font-size: 2rem;
  }
  h3{
    font-size: 1.6rem;
  }
  h4{
    font-size: 1.4rem;
  }
  h5{
    font-size: 1rem;
  }
  p{
    line-height: 1.5em;
  }
  .aside strong{
    color: var(--doc-aside-color-strong, unset);
  }
`;

export const Container = c(container);
