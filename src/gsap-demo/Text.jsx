import React, { useRef } from "react";
import "./Text.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

const Text = () => {
   useGSAP(()=>{
    gsap.from("main h1",{
      y:100,
      duration:0.8,
      stagger:-0.2,
    })
   })

  return (
    <main>
      <div className="text">
        <h1>h</h1>
        <h1>e</h1>
        <h1>l</h1>
        <h1>l</h1>
        <h1>o</h1>
      </div>
    </main>
  );
};

export default Text;
