import { c } from "atomico";
import { Input } from "../input/input";
import { InputColor } from "../input-color/input-color";
import { Grid } from "../grid/grid";
import { tokens } from "../tokens";

function theme() {
    return (
        <host shadowDom>
            {Object.values(tokens).map(({ title }) => (
                <section>
                    <h1>{title}</h1>
                    <Grid model="repeat(5,120px) gap(,.5) rows(30px)">
                        <Input type="number" size="small">
                            <span slot="suffix">px</span>
                        </Input>
                        <Input type="number">
                            <span slot="suffix">px</span>
                        </Input>
                        <Input type="number">
                            <span slot="suffix">px</span>
                        </Input>
                        <Input type="number">
                            <span slot="suffix">px</span>
                        </Input>
                        <InputColor></InputColor>
                    </Grid>
                </section>
            ))}
        </host>
    );
}

export const Theme = c(theme);
