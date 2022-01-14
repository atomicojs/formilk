import { c, css, Component } from "atomico";

const props = {
    age: Number,
};

const inputFile: Component<typeof props> = ({ age }) => {
    return <host shadowDom></host>;
};

inputFile.props = props;

inputFile.styles = css`
    :host {
        --color-black: tomato;
    }
`;

const InputFile = c(inputFile);
