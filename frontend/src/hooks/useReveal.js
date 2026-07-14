import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll. Returns a ref + boolean; flips true once the element
 * scrolls into view, then stops observing. Degrades gracefully when
 * IntersectionObserver is unavailable (shows content immediately).
 */
export function useReveal(options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}
