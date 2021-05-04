import { c } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { PaginationItem } from "../components.js";
import style from "./pagination.css";

export function pagination({ prev, next }) {
    useRender(() => [
        <PaginationItem
            href={prev?.href}
            direction="<"
            label={prev?.label}
        ></PaginationItem>,
        <PaginationItem
            href={next?.href}
            direction=">"
            label={next?.label}
        ></PaginationItem>,
    ]);

    return (
        <host shadowDom>
            <style>{style}</style>
            <slot></slot>
        </host>
    );
}

pagination.props = {
    next: Object,
    prev: Object,
};

export const Pagination = c(pagination);
