import React from 'react'

export default function MainSection() {
  return (
    <div className="xsz:py-5 bg-linear-45 md:py-24 lg:py-30 from-gradU to bg-gradD flex flex-col md:gap-2 lg:gap-4 xl:gap-5 items-center">

      <h1 className=" text-white font-inter tracking-wide md:text-3xl lg:text-4xl xl:text-5xl md:font-semibold text-shadow-lg/10"> Hello, I'm <span className="text-amber-300"> Abhay Chaudhary </span> </h1>
      <p className="font-inter text-white md:font-semibold lg:text-lg text-shadow-lg">
        BCA Graduate ▶️ Front-end Developer
      </p>

      <div className="goThrough font-poppins md:text-xs lg:text-sm md:space-x-4 xl:space-x-6">

        <a href="#">
          <button className="bg-white md:px-3 md:py-2 md:rounded-md hover:scale-105 ease-in-out duration-100 shadow-lg cursor-pointer border border-white text-site"> View My Work </button>
        </a>

        <a href="#">
          <button className="md:px-3 md:py-2 md:rounded-md hover:scale-105 ease-in-out duration-100 shadow-lg cursor-pointer border border-white text-white"> Contact Me </button>
        </a>

      </div>

    </div>
  )
}
