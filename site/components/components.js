import {
  RouterRedirect,
  RouterSwitch,
  RouterCase,
} from "@atomico/components/router";

import { Container } from "./container/container.jsx";
export { Container } from "./container/container.jsx";

import { Source } from "./source/source.jsx";
export { Source } from "./source/source.jsx";

import { Group } from "./group/group.jsx";
export { Group } from "./group/group.jsx";

import { Menu } from "./menu/menu.jsx";
export { Menu } from "./menu/menu.jsx";

import { MenuItem } from "./menu/menu-item.jsx";
export { MenuItem } from "./menu/menu-item.jsx";

customElements.define("router-redirect", RouterRedirect);
customElements.define("router-switch", RouterSwitch);
customElements.define("router-case", RouterCase);

customElements.define("doc-container", Container);
customElements.define("doc-source", Source);
customElements.define("doc-group", Group);
customElements.define("doc-menu", Menu);
customElements.define("doc-menu-item", MenuItem);
