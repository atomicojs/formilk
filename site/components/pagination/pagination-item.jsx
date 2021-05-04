import { c } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import style from "./pagination-item.css";

function paginationItem({ href, label, direction }) {
    useRender(() => (
        <a href={href} data-direction={direction}>
            {href && [
                <svg
                    style={
                        direction == ">"
                            ? `margin-left: 1rem`
                            : `margin-right: 1rem`
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="17"
                >
                    <path
                        fill="currentColor"
                        d={
                            direction == ">"
                                ? "M8.207 6.976a2 2 0 010 3.048L3.3 14.2A2 2 0 010 12.675v-8.35A2 2 0 013.3 2.8z"
                                : "M1.793 10.024a2 2 0 010-3.048L6.7 2.8A2 2 0 0110 4.325v8.35A2 2 0 016.7 14.2z"
                        }
                    />
                </svg>,
                <span>{label}</span>,
            ]}
        </a>
    ));
    return (
        <host shadowDom>
            <style>{style}</style>
            <slot></slot>
        </host>
    );
}

paginationItem.props = {
    href: String,
    direction: {
        type: String,
        reflect: true,
    },
    label: String,
};

export const PaginationItem = c(paginationItem);
