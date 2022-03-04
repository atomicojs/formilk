import { md, Stories, Story } from "@atomico/stories";

export const meta = {
    title: "My story component",
    path: "/",
};

export default md`
# My story ${(<br />)} component

> et est sit ipsum occaecat id do excepteur ullamco labore non labore consequat deserunt veniam anim fugiat tempor non proident dolore proident commodo incididunt amet tempor pariatur ullamco qui voluptate minim tempor exercitation nisi voluptate sit laboris adipisicing officia velit qui ut commodo proident in ea laborum

et est sit ipsum occaecat id do excepteur ullamco labore non labore consequat deserunt veniam anim fugiat tempor non proident dolore proident commodo incididunt amet tempor pariatur ullamco qui voluptate minim tempor exercitation nisi voluptate sit laboris adipisicing officia velit qui ut commodo proident in ea laborum

~~~jsx
import { md } from "@atomico/stories";

export const meta = {
  title: "welcome!",
  path: "/"
};

export default md\`
# Title...

Content...

\${<button onclick={console.log}>I am JSX</button>}

\`;
~~~

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Atomico - Started</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <style>
      html {
        width: 100%;
        height: 100%;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
      }
      body {
        width: 100%;
        height: 100%;
        margin: 0px;
        overflow: hidden auto;
      }
    </style>
    <script async type="module" src="./example/load.tsx"></script>
  </head>
  <body></body>
</html>

~~~



Con ~@atomico/stories~ podras documentar  tus webcomponents y crear storias reactivas, ejemplo:

${(
    <Stories
        props={{
            disabled: {
                type: "switch",
                description: "my prop...",
            },
            size: {
                type: "select",
                description: "my prop...",
                options: ["small", "large"],
            },
            label: {
                type: "text",
                description: "Write content...",
            },
        }}
    >
        <Story
            label="I am story 1"
            render={(props) => (
                <button style="background: black; color: white; height: 40px;width:180px;border:none;border-radius:.5rem;font-size: unset;font-family:unset;">
                    {props.label || "button"}
                </button>
            )}
        ></Story>
        <Story label="I am story 2">
            <button>hola - 2</button>
        </Story>
    </Stories>
)}
`;
