import { c } from "atomico";
import style from "./menu.css";

function menuItem() {
  return (
    <host shadowDom>
      <style>{style}</style>
      <slot></slot>
    </host>
  );
}

menuItem.props = {
  active: {
    type: Boolean,
    reflect: true,
    event: {
      type: "MenuItemChange",
      bubbles: true,
    },
  },
};

export const MenuItem = c(menuItem);
