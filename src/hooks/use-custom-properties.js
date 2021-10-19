import { useHost, useLayoutEffect } from "atomico";

/**
 * @tempalte {Object<string,number|string>} T
 * @param {T} props
 * @param {string} [selector]
 */
export const customProperties = (props, selector = ":host") =>
    `${selector}{${Object.entries(props).reduce(
        (css, [prop, value]) => css + (value ? `--${prop}:${value};` : ""),
        ""
    )}}`;
/**
 * @tempalte {Object<string,number|string>} T
 * @param {T} props
 * @param {string} [selector]
 */
export function useCustomProperties(props, selector = ":host") {
    const host = useHost();

    host.style = host.style || document.createElement("style");

    useLayoutEffect(() => {
        host.current.shadowRoot.appendChild(host.style);
        return () => host.style.remove();
    }, []);

    const css = customProperties(props, selector);

    if (host.style.textContent != css) host.style.textContent = css;
}
