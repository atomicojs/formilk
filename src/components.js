import { Card } from "./card/card.jsx";
import { InputBasic } from "./input-basic/input-basic.jsx";
import { InputToggle } from "./input-toggle/input-toggle.jsx";
import { InputCheckbox } from "./input-checkbox/input-checkbox.jsx";
import { InputRadio } from "./input-radio/input-radio.jsx";
import { InputColor } from "./input-color/input-color.jsx";
import { Button } from "./button/button.jsx";
import { Label } from "./label/label.jsx";

export { Card } from "./card/card.jsx";
export { InputBasic } from "./input-basic/input-basic.jsx";
export { InputToggle } from "./input-toggle/input-toggle.jsx";
export { InputCheckbox } from "./input-checkbox/input-checkbox.jsx";
export { InputRadio } from "./input-radio/input-radio.jsx";
export { InputColor } from "./input-color/input-color.jsx";
export { Button } from "./button/button.jsx";
export { Label } from "./label/label.jsx";

customElements.define("fm-card", Card);
customElements.define("fm-input-basic", InputBasic);
customElements.define("fm-input-toggle", InputToggle);
customElements.define("fm-input-checkbox", InputCheckbox);
customElements.define("fm-input-radio", InputRadio);
customElements.define("fm-input-color", InputColor);
customElements.define("fm-button", Button);
customElements.define("fm-label", Label);
