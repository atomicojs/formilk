import { template } from "atomico";
import { Avatar } from "./avatar";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: "components/avatar",
    // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
    argTypes: {
        color: { control: "color" },
        width: {
            control: { type: "text" },
        },
    },
};

export const Story = (props: any) => template(<Avatar {...props} />);

Story.args = {
    color: "black",
    width: "280px",
};
