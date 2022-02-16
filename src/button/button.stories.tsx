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

export const Variants = (props: any) => {
    return template(
        <Grid>
            <Grid>
                <h3>Button</h3>
                <Grid model="width(280px) content(,left)">
                    <Button {...props}>Button</Button>
                </Grid>
            </Grid>
            <Grid>
                <h3>Buttons status</h3>
                <Grid model="width(280px) autoFill(120px, 1fr)">
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
                </Grid>
            </Grid>
            <Grid>
                <h3>only slot[prefix]</h3>
                <Grid model="width(280px) ">
                    <Button {...props}>
                        <Icon slot="prefix" type="avatar"></Icon>
                    </Button>
                </Grid>
            </Grid>
            <Grid>
                <h3>slot[prefix]</h3>
                <Grid model="width(280px)  content(,left)">
                    <Button {...props}>
                        <Icon slot="prefix" type="avatar"></Icon>
                        Button
                    </Button>
                </Grid>
            </Grid>
            <Grid>
                <h3>slot[suffix]</h3>
                <Grid model="width(280px) content(,left)">
                    <Button {...props}>
                        <Icon slot="suffix" type="avatar"></Icon>
                        Button
                    </Button>
                </Grid>
            </Grid>
            <Grid>
                <h3>slot[prefix] & slot[suffix]</h3>
                <Grid model="width(280px) content(,left)">
                    <Button {...props}>
                        <Icon slot="prefix" type="check"></Icon>
                        Button
                        <Icon slot="suffix" type="avatar"></Icon>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

Variants.args = {
    disabled: false,
    rounded: false,
    outline: false,
    shadow: false,
};

export const Default = (props: any) =>
    template(<Button {...props}>Button</Button>);

Default.args = {
    disabled: false,
    rounded: false,
    outline: false,
    shadow: false,
};

export const Small = (props: any) =>
    template(<Button {...props}>Button</Button>);

Small.args = {
    disabled: false,
    rounded: false,
    outline: false,
    shadow: false,
    size: "small",
};
