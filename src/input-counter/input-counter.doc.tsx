import { InputCounter } from "./input-counter";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input/Counter",
};

export default md`
# IconCounter

${(
    <Stories
        props={{
            size: { type: "radio-groups", options: ["normal", "small"] },
        }}
    >
        <Story label="Default" content="center">
            <InputCounter style="width: 220px"></InputCounter>
        </Story>
    </Stories>
)}

`;
