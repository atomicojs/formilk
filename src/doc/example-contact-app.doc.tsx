import { md } from "@atomico/stories";

export const meta = {
    path: "/examples/Contact app",
};

export default md`
# Example Contacts app

${(
    <iframe
        width="100%"
        height="820px"
        loading="lazy"
        src="https://stackblitz.com/edit/formilk-example-contact-app?embed=1&file=src/app.tsx&hideExplorer=1&view=preview"
        frameborder="0"
    ></iframe>
)}

`;
