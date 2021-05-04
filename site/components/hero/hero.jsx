import { c } from "atomico";
import style from "./hero.css";

function hero() {
    return (
        <host shadowDom>
            <style>{style}</style>
            <slot name="title"></slot>
        </host>
    );
}

export const Hero = c(hero);
