export const prefix = "fm";

export const tokens = {
    border: {
        radius: ".5rem",
        width: "1px",
    },
    opacity: {
        unselect: ".25",
        unfocus: ".5",
        disabled: ".5",
    },
    size: {
        "": "4px",
        xl: "calc(var(--size) * 10)",
        l: "calc(var(--size) * 8)",
        m: "calc(var(--size) * 7)",
        s: "calc(var(--size) * 5)",
        xs: "calc(var(--size) * 4)",
        xxs: "calc(var(--size) * 3)",
    },
    color: {
        primary: {
            60: "#404040",
            30: "transparent",
            10: "white",
        },
        action: {
            60: "#fff",
            30: "transparent",
            10: "#2C3A41",
        },
        toggle: {
            60: "var(--color-primary-60)",
            30: "var(--color-primary-30)",
            10: "var(--color-primary-10)",
        },
        layer: {
            60: "#fff",
            30: "transparent",
            10: "#2C3A41",
        },
        scroll: {
            60: "transparent",
            30: "transparent",
            10: "transparent",
        },
        input: {
            60: "var(--color-action-60)",
            30: "var(--color-action-30)",
            10: "var(--color-action-10)",
        },
        button: {
            60: "var(--color-action-60)",
            30: "var(--color-action-30)",
            10: "var(--color-action-10)",
        },
    },
    input: {
        border: {
            width: "var(--border-width)",
            style: "solid",
            "": "var(--input-border-width) var(--input-border-style) var(--color-input-30)",
        },
    },
    variation: {
        [`size=small`]: {
            size: {
                xl: "calc(var(--size) * 8)",
                l: "calc(var(--size) * 7)",
                m: "calc(var(--size) * 5)",
                s: "calc(var(--size) * 3.5)",
            },
        },
    },
};
