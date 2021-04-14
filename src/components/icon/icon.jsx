import { c } from "atomico";
import * as Icons from "./icons.jsx";

const style = /*css*/ `
    :host{
        display: inline-flex;
    }
    svg{
        margin: auto;
        fill: currentColor;
        display: block;
    }
`;

function icon({ type }) {
  return (
    <host shadowDom>
      <style>{style}</style>
      {Icons[type] ? Icons[type]() : ""}
    </host>
  );
}

icon.props = {
  type: { type: String, value: "user" },
};

export const Icon = c(icon);
