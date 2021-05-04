import style from "./formilk.css";
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

customElements.define("fm-card", Card);
customElements.define("fm-input-basic", InputBasic);
customElements.define("fm-input-toggle", InputToggle);
customElements.define("fm-input-checkbox", InputCheckbox);
customElements.define("fm-input-radio", InputRadio);
customElements.define("fm-input-color", InputColor);
customElements.define("fm-button", Button);
customElements.define("fm-label", Label);
