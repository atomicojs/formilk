import { Card } from "./card/card.jsx";
import { InputBasic } from "./input-basic/input-basic.jsx";
import { InputSwitch } from "./input-switch/input-switch.jsx";
import { InputCheckbox } from "./input-checkbox/input-checkbox.jsx";
import { InputRadio } from "./input-radio/input-radio.jsx";
import { InputColor } from "./input-color/input-color.jsx";
import { InputSelect } from "./input-select/input-select.jsx";
import { Button } from "./button/button.jsx";
import { Label } from "./label/label.jsx";

export { Card } from "./card/card.jsx";
export { InputBasic } from "./input-basic/input-basic.jsx";
export { InputSwitch } from "./input-switch/input-switch.jsx";
export { InputCheckbox } from "./input-checkbox/input-checkbox.jsx";
export { InputRadio } from "./input-radio/input-radio.jsx";
export { InputColor } from "./input-color/input-color.jsx";
export { InputSelect } from "./input-select/input-select.jsx";
export { Button } from "./button/button.jsx";
export { Label } from "./label/label.jsx";

customElements.define("fm-card", Card);
customElements.define("fm-input-basic", InputBasic);
customElements.define("fm-input-switch", InputSwitch);
customElements.define("fm-input-checkbox", InputCheckbox);
customElements.define("fm-input-radio", InputRadio);
customElements.define("fm-input-color", InputColor);
customElements.define("fm-input-select", InputSelect);
customElements.define("fm-button", Button);
customElements.define("fm-label", Label);
