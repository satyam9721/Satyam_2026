import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { SplitText } from "gsap-trial/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  // Skip animation on small devices
  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // ================= PARA ANIMATION =================
  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");

    // Cleanup previous animation
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    // Create new split instance
    const splitInstance = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.split = splitInstance;

    // Safety check (fix TS error)
    if (!splitInstance.words) return;

    para.anim = gsap.fromTo(
      splitInstance.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // ================= TITLE ANIMATION =================
  titles.forEach((title: ParaElement) => {
    // Cleanup previous animation
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }

    // Create new split instance
    const splitInstance = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    title.split = splitInstance;

    // Safety check (fix TS error)
    if (!splitInstance.chars) return;

    title.anim = gsap.fromTo(
      splitInstance.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });
}

/**
 * OPTIONAL: Call this once in your main file (NOT inside setSplitText)
 * to avoid infinite refresh loops
 */
export function initSplitText() {
  setSplitText();

  ScrollTrigger.addEventListener("refreshInit", () => {
    document.querySelectorAll<ParaElement>(".para, .title").forEach((el) => {
      el.split?.revert();
    });
  });
}