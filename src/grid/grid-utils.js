export const width = (width, minWidth, maxWidth) => ({
    width,
    minWidth,
    maxWidth,
});

export const height = (width, minHeight, maxHeight) => ({
    width,
    minHeight,
    maxHeight,
});

export const position = (position, top, right, bottom, left) => ({
    position,
    top,
    right,
    bottom,
    left,
});

export const overflow = (overflow = "hidden") => ({ overflow });

export const padding = (paddingY = "s", paddingX = paddingY) => ({
    padding: `var(--size-${paddingY}) var(--size-${paddingX})`,
});

export const radius = (radius = "var(--border-radius)") => ({ radius });

export const cols = (gridTemplateColumns) => ({ gridTemplateColumns });

export const rows = (gridTemplateRows) => ({ gridTemplateRows });

export const gap = (gap = "xs") => ({ gap: `var(--size-${gap})` });

export const content = (placeContent) => ({
    placeContent: placeContent.replace(/(between|around|evenly)/g, "space-$1"),
});

export const hide = (display = "none") => ({ "----display": display });

export const show = (display = "grid") => ({ "----display": display });

export const slot = (selector, cssText) => ({
    selector: `::slotted(${selector})`,
    cssText,
});
