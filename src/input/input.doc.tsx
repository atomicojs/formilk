import { Input } from "./input";
import { Icon } from "../icon/icon";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input",
};

export default md`
# Icon

${(
    <Stories
        props={{
            size: { type: "radio-groups", options: ["normal", "small"] },
            required: {
                type: "toggle",
            },
            disabled: {
                type: "toggle",
            },
            name: {
                type: "text",
            },
            value: {
                type: "text",
            },
            placeholder: {
                type: "text",
            },
            minLength: {
                type: "number",
            },
            maxLength: {
                type: "number",
            },
        }}
    >
        <Story
            label="Default"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input"></Input>
                </div>
            )}
        ></Story>
        <Story
            label="Prefix"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input">
                        <Icon slot="prefix" type="avatar"></Icon>
                    </Input>
                </div>
            )}
        ></Story>
        <Story
            label="Suffix"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input">
                        <Icon slot="suffix" type="avatar"></Icon>
                    </Input>
                </div>
            )}
        ></Story>
        <Story
            label="Label"
            content="center"
            render={(props) => (
                <div>
                    <Input {...props} placeholder="input">
                        Label
                    </Input>
                </div>
            )}
        ></Story>
    </Stories>
)}

`;
