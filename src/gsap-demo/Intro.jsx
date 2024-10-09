import React from 'react'
import './Intro.css'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Intro = () => {
gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.from(".page1 .box",{
            scale:0,
            duration:2,
            rotate:360,
            opacity:0
        })
        gsap.to(".page2 h1",{
    x:"-100%",
    duration:5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:2,
        markers:true,
        start:"top 0%",
        end:"top -100%",
        pin:true
    }
        })
        gsap.from(".page3 .box",{
            scale:0,
            duration:2,
            rotate:360
        })
    })
  
    return (
    <>
<div className="page1">
<div className="box"></div>        
</div>

<div className="page2">
<h1>EXPERTICES</h1>
</div>

<div className="page3">
<div className="box"></div>
    </div> 
 
</>
)}

export default Intro
