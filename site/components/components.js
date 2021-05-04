import {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
} from "@atomico/components/router";

export {
    RouterRedirect,
    RouterSwitch,
    RouterCase,
} from "@atomico/components/router";

import { Container } from "./container/container.jsx";
export { Container } from "./container/container.jsx";

import { Aside } from "./aside/aside.jsx";
export { Aside } from "./aside/aside.jsx";

import { Article } from "./article/article.jsx";
export { Article } from "./article/article.jsx";

import { Source } from "./source/source.jsx";
export { Source } from "./source/source.jsx";

import { Hero } from "./hero/hero.jsx";
export { Hero } from "./hero/hero.jsx";

import { Group } from "./group/group.jsx";
export { Group } from "./group/group.jsx";

import { Menu } from "./menu/menu.jsx";
export { Menu } from "./menu/menu.jsx";

import { MenuItem } from "./menu/menu-item.jsx";
export { MenuItem } from "./menu/menu-item.jsx";

import { PaginationItem } from "./pagination/pagination-item.jsx";
export { PaginationItem } from "./pagination/pagination-item.jsx";

import { Pagination } from "./pagination/pagination.jsx";
export { Pagination } from "./pagination/pagination.jsx";

customElements.define("router-redirect", RouterRedirect);
customElements.define("router-switch", RouterSwitch);
customElements.define("router-case", RouterCase);

customElements.define("doc-container", Container);
customElements.define("doc-aside", Aside);
customElements.define("doc-article", Article);
customElements.define("doc-hero", Hero);
customElements.define("doc-source", Source);
customElements.define("doc-group", Group);
customElements.define("doc-menu", Menu);
customElements.define("doc-pagination", Pagination);
customElements.define("doc-pagination-item", PaginationItem);

customElements.define("doc-menu-item", MenuItem, {
    extends: "a",
});
