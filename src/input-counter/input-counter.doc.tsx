import { InputCounter } from "./input-counter";
import { Grid } from "../grid/grid";
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
                <Grid model="width(220px)">
                    <InputCounter {...props}></InputCounter>
                </Grid>
            )}
        ></Story>
    </Stories>
)}

`;
