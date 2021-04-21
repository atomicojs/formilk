import { c } from "atomico";

function source() {
  return <host></host>;
}

source.props = {
  label: String,
  load: Function,
  path: String,
};

export const Source = c(source);
