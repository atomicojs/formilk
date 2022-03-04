import { Button } from "./button";
import { Icon } from "../icon/icon";
import { Grid } from "../grid/grid";
import { template } from "atomico";

export default {
    title: "components/button",
    argTypes: {
        shadow: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        rounded: {
            control: "boolean",
        },
        outline: {
            control: "boolean",
        },
        size: {
            options: ["small", "normal"],
            control: "radio",
        },
    },
};

const Base = (props) => template(<Button {...props}>Button</Button>);

export const Variants = (props) => {
    return template(
        <Grid model="autoFit(160px, 1fr) content(center, right)">
            <Button {...props} status="info">
                Button
            </Button>
            <Button {...props} status="success">
                Button
            </Button>
            <Button {...props} status="warning">
                Button
            </Button>
            <Button {...props} status="danger">
                Button
            </Button>
            <Button {...props}>
                <Icon slot="prefix" type="avatar"></Icon>
            </Button>
            <Button {...props}>
                <Icon slot="prefix" type="avatar"></Icon>
                Prefix
            </Button>
            <Button {...props}>
                <Icon slot="suffix" type="avatar"></Icon>
                Suffix
            </Button>
            <Button {...props}>
                <Icon slot="prefix" type="check"></Icon>
                Button
                <Icon slot="suffix" type="avatar"></Icon>
            </Button>
        </Grid>
    );
};

const Default = Base.bind({});

Default.args = {
    disabled: false,
    rounded: false,
    outline: false,
    shadow: false,
};

Variants.args = {
    disabled: false,
    rounded: false,
    outline: false,
    shadow: false,
};

export const Small = Base.bind({});

Small.args = {
    size: "small",
};

export const DefaultRounted = Base.bind({});

DefaultRounted.args = {
    rounded: true,
};

export const Outline = Base.bind({});

Outline.args = {
    outline: true,
};

export const Disabled = Base.bind({});

Disabled.args = {
    disabled: true,
};

export const OutlineAndDisabled = Base.bind({});

OutlineAndDisabled.args = {
    outline: true,
    disabled: true,
};
