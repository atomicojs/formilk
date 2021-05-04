import { c, useRef, useUpdate } from "atomico";
import { useRouteMatch } from "@atomico/hooks/use-router";
import { useSlot } from "@atomico/hooks/use-slot";

import {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
    Group,
} from "../components.js";

import { pagination } from "./_pagination.jsx";
import { aside } from "./_aside.jsx";

import styleContainer from "./container.css";
import styleMarkdown from "./markdown.css";
import stylePagination from "./pagination.css";
import styleAside from "./aside.css";
import styleArticle from "./article.css";

import { getPagination, getSourcePath } from "./utils.js";
import { useRender } from "@atomico/hooks/use-render";

function container() {
    const ref = useRef();
    const refSwitch = useRef();
    const slots = useSlot(ref);
    const update = useUpdate();
    /**
     * @type {Group["Props"][]}
     */
    const groups = slots.filter((child) => child instanceof Group);
    const match = useRouteMatch();
    const meta = refSwitch.current?.data?.meta;

    const [prev, next] = getPagination(groups, match);

    return (
        <host shadowDom onChangeSources={update}>
            <style>
                {styleContainer}
                {styleMarkdown}
                {stylePagination}
                {styleAside}
                {styleArticle}
            </style>
            <slot ref={ref}></slot>
            <RouterRedirect>
                <div class="content">
                    {aside({ groups: groups, match })}
                    <article class="article">
                        {meta && (
                            <header class="article-header" key="header">
                                <h1>{meta.title}</h1>
                            </header>
                        )}
                        <div class="article-content" key="content">
                            <RouterSwitch ref={refSwitch} onData={update}>
                                {groups.map(({ label, sources }) =>
                                    sources.map(
                                        (source) =>
                                            source.load && (
                                                <RouterCase
                                                    path={getSourcePath(
                                                        label,
                                                        source
                                                    )}
                                                    key={source}
                                                    load={source.load}
                                                ></RouterCase>
                                            )
                                    )
                                )}
                            </RouterSwitch>
                        </div>
                        {(prev || next) && pagination({ next, prev })}
                    </article>
                    <aside class="aside"></aside>
                </div>
            </RouterRedirect>
        </host>
    );
}

container.props = {
    path: String,
};

export const Container = c(container);
