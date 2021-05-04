import { c } from "atomico";
import style from "./article.css";

function article() {
    return (
        <host shadowDom>
            <style>{style}</style>
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="content">
                <slot></slot>
            </div>
            <div class="pagination">
                <slot name="pagination"></slot>
            </div>
        </host>
    );
}

article.props = {};

export const Article = c(article);
