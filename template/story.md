---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## Component story

```jsx {%name|kebabCase%}/{%name|kebabCase%}.stories.tsx
import { template } from "atomico";
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/{%name|kebabCase%}",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    color: { control: "color" },
    width: {
      control: { type: "text" },
    },
  },
};

export const Story = (props:any) =>template(<{%name|pascalCase%} {...props}/>);

Story.args = {
  color: "black",
  width: "280px",
};
```
