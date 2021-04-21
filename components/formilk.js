import "./formilk.css";
import { Card } from "./card.jsx";
import { InputBasic } from "./input-basic.jsx";
import { InputToggle } from "./input-toggle.jsx";
import { InputCheckbox } from "./input-checkbox.jsx";
import { InputRadio } from "./input-radio.jsx";
import { InputColor } from "./input-color.jsx";
import { Button } from "./button.jsx";
import { Label } from "./label.jsx";

export { Card } from "./card.jsx";
export { InputBasic } from "./input-basic.jsx";
export { InputToggle } from "./input-toggle.jsx";
export { InputCheckbox } from "./input-checkbox.jsx";
export { InputRadio } from "./input-radio.jsx";
export { InputColor } from "./input-color.jsx";
export { Button } from "./button.jsx";
export { Label } from "./label.jsx";

customElements.define("formilk-card", Card);
customElements.define("formilk-input-basic", InputBasic);
customElements.define("formilk-input-toggle", InputToggle);
customElements.define("formilk-input-checkbox", InputCheckbox);
customElements.define("formilk-input-radio", InputRadio);
customElements.define("formilk-input-color", InputColor);
customElements.define("formilk-button", Button);
customElements.define("formilk-label", Label);
