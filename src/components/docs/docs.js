import {
  RouterRedirect,
  RouterSwitch,
  RouterCase,
} from "@atomico/components/router";
import { Container } from "./doc-container.jsx";
import { Group } from "./doc-group.jsx";
import { Source } from "./doc-source.jsx";

customElements.define("doc-router-redirect", RouterRedirect);

customElements.define("doc-container", Container);
customElements.define("doc-group", Group);
customElements.define("doc-source", Source);
