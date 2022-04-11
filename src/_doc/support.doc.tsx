import { md } from "@atomico/stories";
import { Theme, Icon } from "../components";
import image from "./community.png";

export const meta = {
    icon: <Icon type="love"></Icon>,
    path: "/Support and community",
};

export default md`
${(<img src={image} alt="" width="100%" />)}

# Support and community

Formilk is part of the [AtomicoJS project](http://github.com/atomicojs/atomico), you are invited to join this project and follow us.

${(
    <Theme class="grid">
        <style>{`
        .grid{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: var(--size-s);
        }
        .grid img{
            width: 100%;
            display: block;
        }
        `}</style>
        <a href="https://twitter.com/atomicojs" target="_blank">
            <img
                src="https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-twitter.svg"
                alt="twitter"
            />
        </a>
        <a href="https://discord.gg/7z3rNhmkNE" target="_blank">
            <img
                src="https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-discord.svg"
                alt="twitter"
            />
        </a>
        <a
            href="https://www.figma.com/community/file/1091744563513186455"
            target="_blank"
        >
            <img
                src="https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-figma.svg"
                alt="twitter"
            />
        </a>
        <a href="https://github.com/atomicojs/formilk" target="_blank">
            <img
                src="https://raw.githubusercontent.com/atomicojs/atomico/brand/link-to-github.svg"
                alt="twitter"
            />
        </a>
    </Theme>
)}

## How to contribute?

We invite you to contribute be:

1. Proposing new components.
2. Using formilk.
3. Sharing this project.
`;
