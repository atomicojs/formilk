import { Icon } from "./icon";
import { Icons } from "./icons";
import { Grid } from "../grid/grid";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Icon",
};

export default md`
# Icon

${(
    <Stories>
        <Story label="Default">
            <Grid model="width(100%) gap(s) cols(1fr 1fr 1fr 1fr) content(center)">
                {Object.keys(Icons).map((type) => (
                    <Grid title={type} model="gap(xxs) content(center)">
                        <small>{type}</small>
                        <Icon type={type}></Icon>
                    </Grid>
                ))}
            </Grid>
        </Story>
    </Stories>
)}

`;
