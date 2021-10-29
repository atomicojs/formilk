import { c } from "atomico";
import { tokens } from "../tokens";

function theme({ select }) {
    const filter = select ? select.split(/\s*,\s*/) : null;
    return (
        <host shadowDom>
            {Object.values(tokens).map(({ title, detail, children }) => {
                const id = "#" + title.toLowerCase().replace(/\s+/g, "-");
                const childrenSelect = (
                    filter && !filter.includes(id)
                        ? children.filter(([, , prop]) => filter.includes(prop))
                        : children
                ).map(([globalProp, value, prop, detail]) => (
                    <li>
                        {detail && <p>{detail}</p>}
                        <strong>{globalProp}</strong>:<code> {value};</code>
                    </li>
                ));

                if (!childrenSelect.length) {
                    return null;
                }

                return (
                    <section>
                        <h2>{title}</h2>
                        {detail && <p>{detail}</p>}
                        <ul>{childrenSelect}</ul>
                    </section>
                );
            })}
        </host>
    );
}

theme.props = {
    select: String,
};

export const Theme = c(theme);
