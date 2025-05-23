import { useState, useEffect } from "react";

export default function MainSection() {

  // regarding Page's title
  const [title, setTitle] = useState("Home");

  // useEffect regarding changing Page's Title
  useEffect(() => {
    document.title = `My Portfolio - ${title}`;
  }, [title]);

  return (
    <div className="xsz:py-5 bg-gradient-to-tl md:py-24 lg:py-30 xl:py-40 2xl:py-44 from-gradU to bg-gradD flex flex-col md:gap-3 lg:gap-4 xl:gap-5 items-center">

      <h1 className=" text-white font-inter tracking-wide md:text-3xl lg:text-4xl xl:text-5xl md:font-semibold text-shadow-lg/10"> Hello, I'm <span className="text-amber-300"> Abhay Chaudhary </span> </h1>
      <p className="font-inter text-white md:font-semibold lg:text-lg xl:text-xl text-shadow-lg">
        BCA Graduate ▶️ Front-end Developer
      </p>

      <div className="goThrough font-poppins md:text-xs lg:text-sm xl:text-base md:space-x-4 xl:space-x-6">

        <a href="#projects">
          <button className="bg-white md:px-3 md:py-2 md:rounded-md hover:scale-105 ease-in-out duration-100 shadow-lg cursor-pointer border border-white text-site" onClick={() => {setTitle("Projects")}} > View My Work </button>
        </a>

        <a href="#contact">
          <button className="md:px-3 md:py-2 md:rounded-md hover:scale-105 ease-in-out duration-100 shadow-lg cursor-pointer border border-white text-white" onClick={() => {setTitle("Contact")}} > Contact Me </button>
        </a>

      </div>

    </div>
  )
}
