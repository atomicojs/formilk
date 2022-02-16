import { Accordion } from "./accordion";
import { AccordionGroup } from "./accordion-group";
import { Box } from "../box/box";
import { template } from "atomico";

export default {
    title: "components/accordion",
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

export const Story = () =>
    template(
        <AccordionGroup>
            <Accordion show>
                <span slot="prefix">Prefix</span>
                <strong slot="header">Content 1</strong>
                <p>
                    Laute duis ipsum velit id tempor duis ut velit ea officia
                    laboris duis fugiat reprehenderit adipisicing ut Lorem esse
                    exercitation minim aliqua
                </p>
            </Accordion>
            <Accordion>
                <strong slot="header">Content 1</strong>
                <p>
                    Laute duis ipsum velit id tempor duis ut velit ea officia
                    laboris duis fugiat reprehenderit adipisicing ut Lorem esse
                    exercitation minim aliqua
                </p>
            </Accordion>
            <Accordion>
                <strong slot="header">Content 1</strong>
                <p>
                    Laute duis ipsum velit id tempor duis ut velit ea officia
                    laboris duis fugiat reprehenderit adipisicing ut Lorem esse
                    exercitation minim aliqua
                </p>
            </Accordion>
        </AccordionGroup>
    );

export const WithBox = () => {
    const DOM = Story() as any;
    return template(
        <Box model="width(380px) padding(2,1)">
            <DOM cloneNode></DOM>
        </Box>
    );
};
