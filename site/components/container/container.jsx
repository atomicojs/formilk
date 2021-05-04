import { c, useRef, useUpdate } from "atomico";
import { useRouteMatch } from "@atomico/hooks/use-router";
import { useSlot } from "@atomico/hooks/use-slot";

import {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
    Group,
    Aside,
    Article,
    Hero,
    Pagination,
} from "../components.js";

// import { pagination } from "../pagination/pagination.jsx";

import style from "./container.css";
import { getPagination, getSourcePath } from "../utils.js";
import { useRender } from "@atomico/hooks/use-render";

function container({ brand }) {
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

    useRender(() => (
        <RouterRedirect class="content">
            {/* {aside({ groups: groups, match })} */}
            <Aside groups={groups} match={match}>
                <img slot="brand" src={brand} alt="Logo" />
            </Aside>
            <Article>
                <Hero slot="header">
                    {meta?.title && <h1 slot="title">{meta?.title}</h1>}
                </Hero>
                <RouterSwitch ref={refSwitch} onData={update}>
                    {groups.map(({ label, sources }) =>
                        sources.map(
                            (source) =>
                                source.load && (
                                    <RouterCase
                                        path={getSourcePath(label, source)}
                                        key={source}
                                        load={source.load}
                                    ></RouterCase>
                                )
                        )
                    )}
                </RouterSwitch>
                <Pagination
                    slot="pagination"
                    next={next}
                    prev={prev}
                ></Pagination>
            </Article>
            <aside class="aside"></aside>
        </RouterRedirect>
    ));

    return (
        <host shadowDom onChangeSources={update}>
            <style>{style}</style>
            <slot ref={ref}></slot>
        </host>
    );
}

container.props = {
    path: String,
    brand: String,
};

export const Container = c(container);
