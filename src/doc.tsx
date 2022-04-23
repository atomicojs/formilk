import { render } from "atomico";
import { Doc, ModuloPage } from "@atomico/stories";
import logo from "./logo.svg";
import "@fontsource/nunito-sans";

const modules = Object.values(
    //@ts-ignore
    import.meta.globEager("./**/*.doc.tsx")
).reduce(
    (pages: any, md: any) => ({
        ...pages,
        [md.meta.path]: md,
    }),
    {}
) as ModuloPage;

render(
    <host>
        <style>
            {`:root{
                --doc--bg-color-story: #e4eaeb;
                --doc--shadow-embed: none;
            }`}
        </style>
        <Doc modules={modules}>
            <img src={logo} alt="Logo" slot="brand" height="32px" />
        </Doc>
    </host>,
    document.body
);
