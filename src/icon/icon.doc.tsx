import { Icon } from "./icon";
import { Icons } from "./icons";
import { Theme } from "../theme/theme";
import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    path: "/Components/Icon",
};

export default md`
# Icon

${(
    <Stories>
        <Story label="Default">
            <Theme class="grid">
                <style>
                    {`
                    .grid{
                        display: grid;
                        width: 100%;
                        gap: var(--size-s);
                        grid-template-columns: repeat(auto-fit,minmax(80px, 1fr));
                    }
                    .grid_item{
                        display: grid;
                        gap: var(--size-s);
                        justify-items: center;
                    }
                    `}
                </style>
                {Object.keys(Icons).map((type) => (
                    <div title={type} class="grid_item">
                        <small>{type}</small>
                        <Icon type={type}></Icon>
                    </div>
                ))}
            </Theme>
        </Story>
    </Stories>
)}

`;
