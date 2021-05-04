import { useRender } from "@atomico/hooks/use-render";
import { c } from "atomico";
import { Menu, MenuItem } from "../components.js";
import { getSourcePath } from "../utils.js";
import styleAside from "./aside.css";

/**
 *
 * @param {Object} props
 * @param {import("../group/group").Group["Props"][]} props.groups
 * @param {(path:string)=>any} props.match
 */
export function aside({ groups, match }) {
    useRender(
        () =>
            groups &&
            groups.map(({ label, sources }) => (
                <div slot="aside-menu">
                    <Menu>
                        <strong>{label}</strong>
                        {sources.map((source) => {
                            const href = getSourcePath(label, source);
                            return (
                                <MenuItem
                                    href={source.href || href}
                                    active={!!match(href)}
                                    target={source.href ? "_blank" : null}
                                    ignore={source.href ? "" : null}
                                >
                                    <strong>{source.label}</strong>
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </div>
            ))
    );
    return (
        <host shadowDom>
            <style>{styleAside}</style>
            <div class="aside">
                <div class="aside-content">
                    <header class="aside-header">
                        <slot name="brand"></slot>
                    </header>
                    <div class="aside-menu">
                        <slot name="aside-menu"></slot>
                    </div>
                </div>
            </div>
        </host>
    );
}

aside.props = {
    groups: Array,
    match: Function,
};

export const Aside = c(aside);
