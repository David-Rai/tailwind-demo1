import React from "react";
import Demo2_box from "./Demo2_box";
import image1 from './image1.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { SiCssdesignawards } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { SiGooglemarketingplatform } from "react-icons/si";

const Demo2 = () => {
  return (
    <main className="h-screen w-full flex flex-nowrap px-10">

      <div className="left h-full w-[70%]">
        {/*left*/}
        <nav className="h-[10%] w-full flex items-center justify-start">
          <h1 className="text-2xl">messimo</h1>
        </nav>
        <div className="section1 h-[25%] w-full flex items-start justify-center flex-col">
          <h1 className="text-4xl">What a kind of work</h1>
          <h1 className="text-4xl">do you do?</h1>
        </div>
        <div className="section2 h-[45%] w-full bg-[#F8F8F8] flex justify-evenly items-center rounded-[10px]">
        <Demo2_box Component={FaBusinessTime} name="Business" />
        <Demo2_box  Component={SiCssdesignawards} name="design"/>
        <Demo2_box  Component={MdDeveloperMode} name="development"/>
        <Demo2_box  Component={ SiGooglemarketingplatform} name="marketing"/>
        </div>

        <div className="section3 h-[20%] w-full  flex items-center justify-start">
    <button className="button">
        Back
    </button>
<button className="button bg-[#A4DA5C] border-none ml-[20px] w-[130px]">
    continue
</button>
        </div>

      </div>

      <div className="h-full w-[30%]  p-[20px]">{/*right*/}
      <img src={image1} className="h-full w-full rounded-2xl" />
      </div>
    </main>
  );
};

export default Demo2;
