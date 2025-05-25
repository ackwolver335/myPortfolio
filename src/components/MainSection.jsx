import { useState, useEffect } from "react";

export default function MainSection() {

  // regarding Page's title
  const [title, setTitle] = useState("Home");

  // useEffect regarding changing Page's Title
  useEffect(() => {
    document.title = `My Portfolio - ${title}`;
  }, [title]);

  return (
    <div className="xsz:py-10 xsz:h-100 md:h-fit xsz:justify-center xsz:w-full bg-gradient-to-tl md:py-24 lg:py-30 xl:py-44 2xl:py-52 from-gradU to bg-gradD flex flex-col xsz:gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 items-center">

      <h1 className=" text-white md:font-inter md:tracking-wide xsz:text-2xl sm:text-4xl xsz:font-bold md:text-3xl lg:text-4xl xl:text-5xl md:font-semibold text-shadow-lg/10"> Hello, I'm <span className="text-amber-300"> Abhay Chaudhary </span> </h1>
      <p className="font-inter text-white xsz:text-sm sm:text-base md:font-semibold lg:text-lg xl:text-xl text-shadow-lg">
        BCA Graduate ▶️ Front-end Developer
      </p>

      <div className="goThrough font-poppins md:text-xs lg:text-sm xl:text-base xsz:space-x-3 sm:space-x-5 md:space-x-4 xl:space-x-6">

        <a href="#projects">
          <button className="bg-white md:px-3 xsz:text-sm sm:text-[15px] xsz:px-2 xsz:py-1 xsz:rounded-sm active:scale-95 md:py-2 md:rounded-md hover:scale-105 ease-in-out duration-100 shadow-lg cursor-pointer border border-white text-site" onClick={() => {setTitle("Projects")}} > View My Work </button>
        </a>

        <a href="#contact">
          <button className="md:px-3 xsz:text-sm sm:text-[15px] xsz:px-2 xsz:py-1 xsz:rounded-sm active:scale-95 md:py-2 md:rounded-md hover:scale-105 ease-in-out duration-100 shadow-lg cursor-pointer border border-white text-white" onClick={() => {setTitle("Contact")}} > Contact Me </button>
        </a>

      </div>

    </div>
  )
}
