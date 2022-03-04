import { template } from "atomico";
import { Checkbox } from "./checkbox";
import { Grid } from "../grid/grid";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: "components/checkbox",
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        color: { control: "color" },
        width: {
            control: { type: "text" },
        },
    },
};

export const Story = (props: any) =>
    template(
        <Grid>
            <Checkbox {...props} />
            <Checkbox {...props} checked={!props.checked} />
        </Grid>
    );

Story.args = {
    color: "black",
    width: "280px",
};
