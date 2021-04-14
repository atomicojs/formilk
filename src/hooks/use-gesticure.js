import { useEffect } from "atomico";

let mouseMove = new Set();
/**
 *
 * @param {Element|window} element
 * @param {string[]} types
 * @param {(ev:MouseEvent)=>void} callback
 * @returns
 */
const listener = (element, types, callback) => {
  types.forEach((type) => {
    element.addEventListener(type, callback);
  });
  return () =>
    types.forEach((type) => element.removeEventListener(type, callback));
};

listener(window, ["mousemove", "touchmove"], (event) => {
  for (const listener of mouseMove) {
    listener(event);
  }
});

let mouseUp = new Set();

listener(window, ["mouseup", "touchcancel"], (event) => {
  for (const listener of mouseUp) {
    listener(event);
  }
});

export function useGesticure(ref, read) {
  useEffect(() => {
    const { current } = ref;
    let capture;
    let map = [];
    let lastEvent;
    let prevent;
    const listenerMouseMove = (event) => {
      if (!capture) return;
      lastEvent = event;
      if (!prevent) {
        const keyframe = () =>
          requestAnimationFrame(() => {
            if (capture) {
              addMap();
              keyframe();
            }
          });
        prevent = keyframe();
      }
    };

    const addMap = () => {
      let point;
      if (capture instanceof TouchEvent) {
        const rect = current.getBoundingClientRect();
        const { pageX, pageY } = lastEvent.targetTouches[0];
        point = {
          pageX,
          pageY,
          offsetX: pageX - rect.left,
          offsetY: pageY - rect.top,
        };
      } else {
        const { pageX, pageY, offsetX, offseyY } = lastEvent;
        point = { pageX, pageY, offsetX, offseyY };
      }
      map.push(point);
      read(map);
    };

    const listenerMouseUp = () => {
      capture = false;
      map = [];
    };

    mouseMove.add(listenerMouseMove);
    mouseUp.add(listenerMouseUp);

    let removeMouseDown = listener(
      current,
      ["mousedown", "touchstart"],
      (event) => (capture = event)
    );

    return () => {
      mouseMove.delete(listenerMouseMove);
      mouseUp.delete(listenerMouseUp);
      removeMouseDown();
    };
  }, [ref]);
}
