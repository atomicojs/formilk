import { RadioButtons } from "./radio-buttons";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Radio buttons",
};

export default md`
# RadioButtons

${(
    <Stories
        props={{
            vertical: {
                type: "toggle",
            },
            name: {
                type: "text",
            },
            value: {
                type: "text",
            },
        }}
    >
        <Story label="Default" content="center">
            <RadioButtons name="left" value="left">
                <Button value="left">Left</Button>
                <Button value="center">Center</Button>
                <Button value="right">Right</Button>
            </RadioButtons>
        </Story>
    </Stories>
)}
`;
