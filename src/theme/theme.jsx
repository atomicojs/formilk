import { c } from "atomico";
import { tokens } from "../tokens";

function theme() {
    return (
        <host shadowDom>
            {Object.values(tokens).map(({ title, detail, children }) => (
                <section>
                    <h2>{title}</h2>
                    {detail && <p>{detail}</p>}
                    <ul>
                        {children.map(([prop, value, detail]) => (
                            <li>
                                {detail && <p>{detail}</p>}
                                <strong>{prop}</strong>:<code> {value}</code>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </host>
    );
}

export const Theme = c(theme);
