import { Card } from "./card/card";
export { Card } from "./card/card";
customElements.define("fm-card", Card);

import { InputBasic } from "./input-basic/input-basic";
export { InputBasic } from "./input-basic/input-basic";
customElements.define("fm-input-basic", InputBasic);

import { InputSwitch } from "./input-switch/input-switch";
export { InputSwitch } from "./input-switch/input-switch";
customElements.define("fm-input-switch", InputSwitch);

import { InputCheckbox } from "./input-checkbox/input-checkbox";
export { InputCheckbox } from "./input-checkbox/input-checkbox";
customElements.define("fm-input-checkbox", InputCheckbox);

import { InputRadio } from "./input-radio/input-radio";
export { InputRadio } from "./input-radio/input-radio";
customElements.define("fm-input-radio", InputRadio);

import { InputColor } from "./input-color/input-color";
export { InputColor } from "./input-color/input-color";
customElements.define("fm-input-color", InputColor);

import { InputSelect } from "./input-select/input-select";
export { InputSelect } from "./input-select/input-select";
customElements.define("fm-input-select", InputSelect);

import { Button } from "./button/button";
export { Button } from "./button/button";
customElements.define("fm-button", Button);

import { Alert } from "./alert/alert";
export { Alert } from "./alert/alert";
customElements.define("fm-alert", Alert);

import { Icon } from "./icon/icon";
export { Icon } from "./icon/icon";
customElements.define("fm-icon", Icon);

import { Avatar } from "./avatar/avatar";
export { Avatar } from "./avatar/avatar";
customElements.define("fm-avatar", Avatar);

import { Tab, TabGroup } from "./tab/tab";
export { Tab, TabGroup } from "./tab/tab";
customElements.define("fm-tab", Tab);
customElements.define("fm-tab-group", TabGroup);

import { Accordion, AccordionGroup } from "./accordion/accordion";
export { Accordion, AccordionGroup } from "./accordion/accordion";
customElements.define("fm-accordion", Accordion);
customElements.define("fm-accordion-group", AccordionGroup);

import {
    Navigation,
    NavigationItem,
    NavigationDropdown,
} from "./navigation/navigation";
export {
    Navigation,
    NavigationItem,
    NavigationDropdown,
} from "./navigation/navigation";
customElements.define("fm-navigation", Navigation);
customElements.define("fm-navigation-item", NavigationItem);
customElements.define("fm-navigation-dropdown", NavigationDropdown);
