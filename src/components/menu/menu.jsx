import { c, useRef } from "atomico";
import { useGesticure } from "../../hooks/use-gesticure.js";

function menu() {
  const ref = useRef();
  useGesticure(ref, (map) => {
    console.log(map);
  });
  return (
    <host shadowDom>
      <style>{
        /*css*/ `
        section{
            width: 320px;
            height: 500px;
            background: tomato;
        }
      `
      }</style>
      <section ref={ref}></section>
    </host>
  );
}

export const Menu = c(menu);
