import { render } from "atomico";
import { Doc, ModuloPage } from "@atomico/stories";
import logo from "./logo.svg";

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
        <Doc modules={modules}>
            <img src={logo} alt="Logo" slot="brand" height="32px" />
        </Doc>
    </host>,
    document.body
);
