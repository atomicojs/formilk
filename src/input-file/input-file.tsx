import { c, css, Component, Target } from "atomico";

const props = {
    age: Number,
};

const inputFile: Component<typeof props> = ({ age }) => {
    age?.toFixed();
    return <p shadowDom></p>;
};

inputFile.props = props;

inputFile.styles = css`
    :host {
        --color-black: tomato;
    }
`;

const InputFile = c(inputFile);

const handler = (event: Event & { target: HTMLInputElement }) => {
    event.preventDefault();
    event.target.value;
};

interface DOMUnknown {
    [prop: string]: any;
}

type DOMEvent<Target, Event> = Omit<Event, "currentTarget" | "target"> & {
    currentTarget: Target;
    target: Target | Element | Node;
};

type DOMEventHandler<Target, Handler> = Handler extends (
    ev: infer CurrentEvent
) => any
    ? CurrentEvent extends Event
        ? (ev: DOMEvent<Target, CurrentEvent>) => any
        : Handler
    : Handler;

type DOMEvents<Target> = {
    [Prop in keyof Target]?: Prop extends `on${string}`
        ? DOMEventHandler<Target, Target[Prop]>
        : Target[Prop];
};

type DOMTags = HTMLElementTagNameMap;

type DOMKeys = keyof DOMTags;

type DOMTag<Element, Props = {}> = DOMEvents<
    Partial<Omit<Element, "style"> & Omit<Props, "slot">>
>;

type DOM<DOMTagsCustom, GenericProps = {}> = {
    [Tag in DOMKeys]: Tag extends keyof DOMTagsCustom
        ? DOMTag<DOMTags[Tag], DOMTagsCustom[Tag]> &
              Partial<GenericProps> &
              DOMUnknown
        : DOMTagsCustom extends { default: infer Default }
        ? DOMTag<DOMTags[Tag], Default> & Partial<GenericProps> & DOMUnknown
        : DOMTag<DOMTags[Tag], {}> & Partial<GenericProps> & DOMUnknown;
};

type S = DOM<
    {
        slot: {
            onslotchange?: (event: Event) => void;
            onroma?: (event: Event) => void;
        };
    },
    {
        class: string;
        shadowDom: boolean;
    }
>;

const T: S["slot"] = {
    class: "evewry",
};
