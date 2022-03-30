import { InputCounter } from "./input-counter";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Input/Counter",
};

export default md`
# Icon counter

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
                    <InputCounter {...props}></InputCounter>
                </div>
            )}
        ></Story>
    </Stories>
)}

`;
