import { render } from "atomico";
import { Doc, ModuloPage } from "@atomico/stories";

const modules = Object.values(
    //@ts-ignore
    import.meta.globEager("./docs/**/*.tsx")
).reduce(
    (pages: any, md: any) => ({
        ...pages,
        [md.meta.path]: md,
    }),
    {}
) as ModuloPage;

render(
    <host>
        <Doc modules={modules}></Doc>
    </host>,
    document.body
);
