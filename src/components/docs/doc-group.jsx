import { c, useProp, useEvent, useEffect } from "atomico";

function group({ label }) {
  const [sources, setSources] = useProp("sources");
  const dispatchChangeGroup = useEvent("ChangeGroup", { bubbles: true });
  useEffect(() => {
    dispatchChangeGroup({ label, sources });
  }, [label, ...sources]);
  return (
    <host
      shadowDom
      onSetSource={(event) => {
        event.stopPropagation();
        setSources((sources) => new Set([...sources, event.target]));
      }}
      onRemoveSource={(event) => {
        event.stopPropagation();
      }}
    ></host>
  );
}

group.props = {
  label: String,
  sources: {
    type: Set,
    value: () => new Set(),
  },
};

export const Group = c(group);
