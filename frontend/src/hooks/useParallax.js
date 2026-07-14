import { useEffect, useRef } from "react";
import { register } from "../lib/parallax";

/**
 * Attach a scroll-parallax effect to an element.
 * @param {(el: HTMLElement, scrollY: number) => void} apply
 *   Mutates the element (usually el.style.transform) from the current scrollY.
 * Returns a ref to place on the target element.
 */
export function useParallax(apply) {
  const ref = useRef(null);
  const applyRef = useRef(apply);
  applyRef.current = apply;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return register({ el, fn: (node, y) => applyRef.current(node, y) });
  }, []);

  return ref;
}
