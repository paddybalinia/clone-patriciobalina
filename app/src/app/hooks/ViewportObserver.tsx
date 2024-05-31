import { useEffect } from "react";

export default function useViewportObserver(
  targetSelector: string,
  visibleClass: string
) {
  useEffect(() => {
    const elements = document.querySelectorAll(targetSelector);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, [targetSelector, visibleClass]);
}
