import { useEffect, useRef } from "react";
import { registerPointer } from "../lib/pointer";

/**
 * Attach a pointer-parallax effect to an element.
 * @param {(el: HTMLElement, nx: number, ny: number) => void} apply
 *   nx, ny are normalised pointer coords in -1..1 (0,0 = viewport centre).
 * Returns a ref to place on the target element.
 */
export function usePointerParallax(apply) {
  const ref = useRef(null);
  const applyRef = useRef(apply);
  applyRef.current = apply;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return registerPointer({ el, fn: (node, nx, ny) => applyRef.current(node, nx, ny) });
  }, []);

  return ref;
}
