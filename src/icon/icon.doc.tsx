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
            <Grid model="autoFit(30px, 60px) width(100%) gap(3, 1)">
                {Object.keys(Icons).map((type) => (
                    <Grid title={type} model="content(center, center)">
                        <small>{type}</small>
                        <Icon type={type}></Icon>
                    </Grid>
                ))}
            </Grid>
        </Story>
    </Stories>
)}

`;
