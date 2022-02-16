import { template } from "atomico";
import { Checkbox } from "./checkbox";
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

export const Story = (props:any) =>template(<Checkbox {...props}/>);

Story.args = {
    color: "black",
    width: "280px",
};