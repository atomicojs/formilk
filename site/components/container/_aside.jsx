import { Menu, MenuItem } from "../components.js";
import { getSourcePath } from "./utils.js";
/**
 *
 * @param {Object} props
 * @param {import("../group/group").Group["Props"][]} props.groups
 * @param {(path:string)=>any} props.match
 */
export function aside({ groups, match }) {
    return (
        <aside class="aside aside-left">
            <div class="aside-content">
                <header class="aside-header">
                    <slot name="aside-top"></slot>
                </header>
                <div class="aside-menu">
                    {groups.map(({ label, sources }) => (
                        <div class="aside-menu">
                            <strong class="aside-menu-label">{label}</strong>
                            <Menu>
                                {sources.map((source) => {
                                    const href = getSourcePath(label, source);
                                    return (
                                        <MenuItem
                                            href={source.href || href}
                                            active={!!match(href)}
                                            class="aside-menu-link"
                                            target={
                                                source.href ? "_blank" : null
                                            }
                                            ignore={source.href ? "" : null}
                                        >
                                            <strong>{source.label}</strong>
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
