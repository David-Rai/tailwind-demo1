import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const demo1 = () => {

  return (
    <>
      <main className="h-screen w-full flex flex-col lg:flex-row ">
        <div className="left w-full h-1/2 bg-white lg:w-1/2 lg:h-full">
          <nav
            className="h-[20%] w-full  
          flex justify-between items-center px-10
          lg:h-[10%]
             "
          >
            <FaArrowLeft />
            <ul className="flex items-center justify-between  w-[30%] md:w-[20%]">
              <li className="pr-4">Home</li>
              <li>About</li>
            </ul>
            <FaTwitter className="text-blue-600" />
          </nav>
          <div className="center h-[90%] w-full  flex flex-col justify-center items-start px-[2rem]">
            <h1 className="text-xl md:text-4xl">Hello,</h1>
            <p className="text-slate-500 py-2 text-sm md:w-[40%] lg:w-[60%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              veritatis eius suscipit corporis quos alias? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Provident, pariatur.
            </p>
            <h3 className=" text-slate-700 underline text-sm">Read</h3>
          </div>
        </div>

        <div className="right  w-full h-1/2 flex flex-wrap lg:w-1/2 lg:h-full">
          <div
            className="rtop h-1/2 w-full
            md:w-1/2
            bg-center
            lg:w-full
       bg-[url(https://i.pinimg.com/736x/b1/69/8c/b1698c3f42503780171ffdb73dda749a.jpg)] bg-no-repeat bg-cover"
          ></div>
          <div className="b1    bg-center  h-1/2 w-1/2 bg-[url(https://i.pinimg.com/736x/7d/5a/de/7d5adeef1accad515243fbe7669e9a70.jpg)] bg-cover bg-no-repeat"></div>
          <div className="b2  h-1/2 w-1/2    bg-center bg-[url(https://i.pinimg.com/564x/5a/d2/1b/5ad21bab80298dd60cc0f290fb69c050.jpg)] bg-cover"></div>
        </div>
      </main>
    </>
  );
};

export default demo1;
