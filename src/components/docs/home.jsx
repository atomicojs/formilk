import md from "@atomico/markdown";

export const meta = {
  title: "Welcome",
  description: "Content...",
};

export default md`
  # formilk

  Un pequeño sistema de diseño amigable con el LightDOM.


  # Input

  ${(<formilk-input-basic></formilk-input-basic>)}

  ~~~jsx
  import "formilk";
  
  <formilk-input></formilk-input-basic>
  ~~~

  > Recuerda importar el estilo global que define el template de los compomnentes.

`;
