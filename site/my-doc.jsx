import { c } from "atomico";
import styleFormilk from "../components/formilk.css";
import { Container, Source, Group } from "./components/components.js";
import logo from "./logo.svg";

const home = () => import("./formilk-button.js");
const input = () => import("./formilk-input.jsx");

function doc() {
    return (
        <host shadowDom>
            <style>{styleFormilk}</style>
            <Container class="formilk_theme">
                <img slot="aside-top" src={logo} alt="Logo" width="120px" />
                <Group label="Components">
                    <Source label="Button" load={home} path="/"></Source>
                    <Source label="Alert" load={input}></Source>
                    <Source label="Modal" load={input}></Source>
                </Group>
                <Group label="Support">
                    <Source
                        label="Github"
                        href="https://github.com/atomicojs/atomico"
                    ></Source>
                    <Source
                        label="Discord"
                        href="https://discord.gg/MNHEjWta"
                    ></Source>
                    <Source
                        label="Twitter"
                        href="https://twitter.com/uppercod"
                    ></Source>
                </Group>
            </Container>
        </host>
    );
}

customElements.define("my-doc", c(doc));
