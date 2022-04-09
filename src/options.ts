export const prefix = "fm";

export const tokens = {
    border: {
        radius: ".5rem",
        width: "1px",
    },
    size: {
        xl: "40px",
        l: "32px",
        m: "28px",
        s: "20px",
        xs: "16px",
        xxs: "12px",
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
        button: {
            60: "var(--color-action-60)",
            30: "var(--color-action-30)",
            10: "var(--color-action-10)",
        },
    },
    input: {
        border: {
            width: "var(--border-width)",
        },
    },
    variation: {
        [`size=small`]: {
            size: {
                xl: "32px",
                l: "28px",
                m: "20px",
                s: "14px",
            },
        },
    },
};
