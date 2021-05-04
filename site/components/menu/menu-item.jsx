import { c } from "atomico";

function menuItem() {
    return <host></host>;
}

menuItem.props = {
    active: {
        type: Boolean,
        reflect: true,
        event: {
            type: "MenuItemChange",
            bubbles: true,
            composed: true,
        },
    },
};

export const MenuItem = c(menuItem, HTMLAnchorElement);
