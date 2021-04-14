import { c, useProp } from "atomico";
import { RouterRedirect } from "@atomico/components/router";

function container() {
  const [groups, setGroups] = useProp("groups");
  return (
    <host
      shadowDom
      onChangeGroup={({ target, detail }) => {
        setGroups((groups) => new Set([...groups, detail]));
      }}
    >
      <RouterRedirect></RouterRedirect>
    </host>
  );
}

container.props = {
  groups: {
    type: Set,
    value: () => new Set(),
  },
};

export const Container = c(container);
