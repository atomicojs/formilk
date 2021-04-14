import { c, useEvent, useEffect } from "atomico";

function source({ src, label }) {
  const dispatchSetSource = useEvent("SetSource", { bubbles: true });
  const dispatchRemoveSource = useEvent("RemoveSource", { bubbles: true });
  useEffect(() => {
    dispatchSetSource({ src, label });
    return dispatchRemoveSource;
  }, [src, label]);
  return <host></host>;
}

source.props = {
  label: String,
  src: String,
};

export const Source = c(source);
