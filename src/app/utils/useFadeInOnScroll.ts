"use client";

import { useEffect, useRef } from "react";

export function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        } else {
          entry.target.classList.remove("fade-in-visible");
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
