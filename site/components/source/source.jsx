import { c } from "atomico";

function source() {
    return <host></host>;
}

source.props = {
    href: String,
    label: String,
    load: Function,
    path: String,
};

export const Source = c(source);
