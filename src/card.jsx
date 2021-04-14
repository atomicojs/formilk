import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";

const style = /*css*/ `
    :host{
        display: block;
        border-radius: var(--card_radius);        
        box-sizing: border-box;
        background: var(--card_background);
        box-shadow: var(--card_shadow);
        position: relative;
    }
    .header{
        padding: 1rem 2rem 0px;
        box-sizing: border-box;
    }
    .content{
        padding: 0rem 2rem;
        display: grid;
        grid-gap: 1.5rem;
    }
    .footer{
        padding: 0rem 1rem;
        box-sizing: border-box;
    }
    .fill{
        padding: 1rem 2rem;
    }
    .actions{
      padding: 1rem 1rem 0px;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      top: 0px;
      right: 0px;
    }
    slot[name="action"]{
      display: grid;
      grid-template-columns: var(--c);
      grid-gap: .5rem;
    }
    .space{
      padding-top: 1rem;
    }
    .image{
      overflow: hidden;
      border-radius: var(--card_radius);        
    }
    ::slotted([slot="image"]){
      max-width: 100%;
      display: block;
      object-fit: cover;
    }
    .hidden{
      display: none;
    }
`;

function card() {
  const refHeader = useRef();
  const refFooter = useRef();
  const refActions = useRef();
  const refContent = useRef();
  const slotHeader = useSlot(refHeader);
  const slotFooter = useSlot(refFooter);
  const slotAction = useSlot(refActions);
  const slotContent = useSlot(refContent);

  return (
    <host shadowDom>
      <style>{style}</style>
      <div class={`actions ${slotAction.length ? "" : "hidden"}`}>
        <slot
          name="action"
          ref={refActions}
          style={`--c:${"auto ".repeat(slotAction.length)}`}
        ></slot>
      </div>
      <div class="image">
        <slot name="image"></slot>
      </div>
      <header
        class={`header ${
          !slotContent.length ? "hidden" : slotHeader.length ? "" : "fill"
        } ${!slotContent.length ? "hidden" : slotAction.length ? "" : "space"}`}
      >
        <slot ref={refHeader} name="header"></slot>
      </header>
      <slot ref={refContent} class="content"></slot>
      <footer
        class={`footer ${
          !slotContent.length ? "hidden" : slotFooter.length ? "" : "fill"
        }`}
      >
        <slot ref={refFooter} name="footer"></slot>
      </footer>
    </host>
  );
}

export const Card = c(card);
