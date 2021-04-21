import { c } from "atomico";
import styleFormilk from "../components/formilk.css";
import { Container, Source, Group } from "./components/components.js";
import logo from "./logo.svg";

const home = () => import("./formilk-button.jsx");
const input = () => import("./formilk-input.jsx");

function doc() {
  return (
    <host shadowDom>
      <style>{styleFormilk}</style>
      <Container class="formilk_theme">
        <img slot="aside-top" src={logo} alt="Logo" width="120px" />
        <Group label="Introducción">
          <Source label="Button" load={home} path="/"></Source>
          <Source label="Input" load={input}></Source>
        </Group>
      </Container>
    </host>
  );
}

customElements.define("my-doc", c(doc));
