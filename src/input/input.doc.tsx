import { Input } from "./input";
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
    </Stories>
)}

`;
