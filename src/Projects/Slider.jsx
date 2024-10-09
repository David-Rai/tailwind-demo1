import React, { useRef, useState } from "react";
import "./Slider.css";

const Slider = () => {
const slideRef=useRef(null)
const [position,setPosition]=useState(0)

  const images = [
    "https://images.unsplash.com/photo-1515824955341-43172b4d8260?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533139143976-30918502365b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
  ];

const next = () => {
setPosition(prev => prev - 600)
};
  const prev = () => {
    setPosition(prev => prev + 600)
};

  return (
    <main>
      <button onClick={prev}>prev</button>
      <div className="slider">
        <div className="board" style={{
            transform:`translatex(${position}px)`
        }}>
          {images.map((image, index) => {
            return <img src={image} key={index} className="image"></img>;
          })}
        </div>
      </div>
      <button onClick={next}>next</button>
    </main>
  );
};

export default Slider;
