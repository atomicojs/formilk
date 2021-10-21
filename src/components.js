import { Grid } from "./grid/grid";
export { Grid } from "./grid/grid";
customElements.define("fm-grid", Grid);

import { Box } from "./box/box";
export { Box } from "./box/box";
customElements.define("fm-box", Box);

import { Input } from "./input/input";
export { Input } from "./input/input";
customElements.define("fm-input", Input);

import { Checkbox } from "./checkbox/checkbox";
export { Checkbox } from "./checkbox/checkbox";
customElements.define("fm-checkbox", Checkbox);

import { Switch } from "./switch/switch";
export { Switch } from "./switch/switch";
customElements.define("fm-switch", Switch);

import { Radio } from "./radio/radio";
export { Radio } from "./radio/radio";
customElements.define("fm-radio", Radio);

import { InputColor } from "./input-color/input-color";
export { InputColor } from "./input-color/input-color";
customElements.define("fm-input-color", InputColor);

import { Select } from "./select/select";
export { Select } from "./select/select";
customElements.define("fm-input-select", Select);

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

import { Tooltip } from "./tooltip/tooltip";
export { Tooltip } from "./tooltip/tooltip";
customElements.define("fm-tooltip", Tooltip);

import { Tabs } from "./tabs/tabs";
export { Tabs } from "./tabs/tabs";
customElements.define("fm-tabs", Tabs);

import { Label } from "./label/label";
export { Label } from "./label/label";
customElements.define("fm-label", Label);

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
