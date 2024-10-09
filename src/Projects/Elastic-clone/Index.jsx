import React, { useRef } from "react";
import "./index.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.from(videoRef.current, {
      scaleX: 0.2,
      duration: 5,
      scrollTrigger: {
        trigger: videoRef.current,
        scroller: "body",
        scrub: true,
      },
    });

    gsap.to(".page4 h1", {
      x: "-100%",
      duration: 5,
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        scrub: 2,
        markers: true,
        start: "top 0%",
        end: "top -100%",
        pin: true,
      },
    });
  });

  return (
    <>
      <div className="page1">
        <nav>
          <div className="logo">logo</div>
          <ul>
            <li>projects</li>
            <li>Experise</li>
            <li>Take more</li>
            <li>contact</li>
          </ul>
        </nav>
        <div className="center">
          <div className="text">
            <span>h</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>o</span>
          </div>
        </div>
      </div>
      <div className="section1">
        <h1>we are the team</h1>
        <h1>we think elastic</h1>
      </div>
      <div className="page2">
        <video autoPlay loop muted ref={videoRef}>
          <source src="https://wethinkelastic.com/assets/videos/video-start.mp4#t=0.1" />
        </video>
      </div>

      <div className="page3">
        <h1>We let's help</h1>
        <h1>THE brands</h1>
        <h1>hasto grow</h1>
        <h1>more quickly</h1>
      </div>

      <div className="page4">
        <h1>EXPERTICES</h1>
      </div>

      <div className="page5"></div>
    </>
  );
};

export default Index;
          