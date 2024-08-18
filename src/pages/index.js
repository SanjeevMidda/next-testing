import { ReactLenis, useLenis } from "lenis/react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useRef } from "react";

export default function Home() {
  let textReference = useRef();

  const lenis = useLenis(({ scroll }) => {});

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=400px",
        scrub: true,
        // markers: true,
      },
    });

    timeline
      .from(textReference.current, {})
      .to(textReference.current, { transform: `translateY(-70px)` }, 0);
  });

  return (
    <ReactLenis root>
      <div className="home">
        <div className="mainContainer">
          <div className="textContainer">
            <div className="text" ref={textReference}>
              <h1>hello</h1>
              <h1>let's</h1>
              <h1>go</h1>
              <h1>PARTYYY!!! </h1>
            </div>
          </div>
        </div>

        <div className="space"></div>
      </div>
    </ReactLenis>
  );
}
