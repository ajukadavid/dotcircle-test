import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Prompt = () => {
  const $follower = useRef<HTMLDivElement>(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo($follower.current, "x", {
        duration: 0.6,
        ease: "power3",
      });

      const yTo = gsap.quickTo($follower.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

      window.addEventListener("mousemove", (e) => {
        if (cursorVisible) {
          xTo(e.clientX);
          yTo(e.clientY);
        }
      });

      return () =>
        window.removeEventListener("mousemove", (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        });
    });

    return () => {
      ctx.revert();
    };
  }, [cursorVisible]);

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  return (
    <>
      <div
        ref={$follower}
        className={`pointer-events-none fixed left-0 top-0 aspect-square w-[20vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform ${
          cursorVisible ? "block" : "hidden"
        }`}
      >
        <div className="h-full w-full animate-spin-slow bg-gradient-to-r from-[#202020] via-[#from-[#202020] via-[#062625] to-[#18887f] via-[#178179]"></div>
      </div>
      <div
        className="relative grid h-screen w-full place-items-center wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="container relative text-center">
          <h1 className="mb-10 text-7xl font-semibold text-white">
          Have a great project in mind? <br/>
            Let’s get started
          </h1>
          <button className="text-white border border-white bg-[#191919] px-3 rounded-md py-2">Contact us</button>
        </div>
      </div>
    </>
  );
};

export default Prompt;
