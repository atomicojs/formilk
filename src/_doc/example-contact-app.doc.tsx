import { md } from "@atomico/stories";
import { App } from "./examples/app";

export const meta = {
    path: "/Examples/Contact app",
};

export default md`
# Example Contacts app

${(<App></App>)}

## Example with

1. Atomico TSX [stackblitz.com](https://stackblitz.com/edit/formilk-example-contact-app?file=src%2Fapp.tsx)
2. Atomico JSX [webcomponents.dev](https://webcomponents.dev/edit/collection/FnaPy15Ple9r6IJKNYDx/kmPhuXMrvAl1vLM8ytB7/src/index.jsx?p=stories)
2. React Tsx [stackblitz.com](https://stackblitz.com/edit/formilk-example-contact-app-react?file=src%2FApp.tsx&terminal=dev)
2. Preact Tsx [stackblitz.com](https://stackblitz.com/edit/formilk-example-contact-app-preact?file=src%2Fapp.tsx&terminal=dev)
`;
