// importing required elements
import { useEffect, useState } from "react"

export default function Navbar() {

    // regarding Page's title
    const [title, setTitle] = useState("Home");

    // useEffect regarding changing Page's Title
    useEffect(() => {
        document.title = `My Portfolio - ${title}`;
    }, [title]);

    // defining method regarding onclick event for menu
    const toggleMenu = () => {
        document.querySelector('.menuList').classList.toggle('xsz:-translate-y-70');
        document.querySelector('.bi-x-square').classList.toggle('xsz:-translate-y-16');

        // for closing the Menu Automatically
        setTimeout(() => {
            document.querySelector('.menuList').classList.add('xsz:-translate-y-70');
            document.querySelector('.bi-x-square').classList.add('xsz:-translate-y-16');
        }, 4500);
    }

    // menu closing method
    const closeMenu = () => {
        document.querySelector('.menuList').classList.add('xsz:-translate-y-70');
        document.querySelector('.bi-x-square').classList.add('xsz:-translate-y-16');
    }

    return (
        <div className="navBar z-20 fixed w-full bg-white/80 backdrop-blur-2xl flex md:flex-row justify-between items-center xsz:py-4 xsz:px-5 md:px-5 xl:px-9 2xl:px-14 2xl:py-5 xl:py-4 xsz:shadow-md xl:shadow-lg">

            <h1 className="xsz:text-xl xl:text-2xl xsz:font-bold text-site font-poppins cursor-pointer"> Portfolio </h1>

            {/* Menu Closing Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-square xsz:w-8 sm:w-9 text-site z-20 xsz:right-5 absolute active:scale-95 xsz:-translate-y-16 md:hidden" viewBox="0 0 16 16" onClick={closeMenu}>
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>

            <ul className="xsz:absolute menuList md:relative xsz:top-0 xsz:-translate-y-70 md:translate-0 md:w-fit md:bg-transparent md:shadow-none md:py-0 xsz:shadow-md xsz:bg-white xsz:w-full xsz:left-0 xsz:items-center xsz:gap-3 sm:gap-4 sm:text-base xsz:py-5 xsz:pt-16 flex xsz:flex-col md:flex-row font-poppins md:text-sm md:gap-4 2xl:gap-6 xl:text-base text-secondary ease-linear duration-200">
                <li> <a href="#" className="hover:text-site ease-in duration-150 hover:text-shadow-black xsz:active:text-site" onClick={() => { setTitle("Home") }}> Home </a> </li>
                <li> <a href="#about" className="hover:text-site ease-in duration-150 hover:text-shadow-black xsz:active:text-site" onClick={() => { setTitle("About") }}> About </a> </li>
                <li> <a href="#skills" className="hover:text-site ease-in duration-150 hover:text-shadow-black xsz:active:text-site" onClick={() => { setTitle("Skills") }}> Skills </a> </li>
                <li> <a href="#projects" className="hover:text-site ease-in duration-150 hover:text-shadow-black xsz:active:text-site" onClick={() => { setTitle("Projects") }}> Projects </a> </li>
                <li> <a href="#contact" className="hover:text-site ease-in duration-150 hover:text-shadow-black xsz:active:text-site" onClick={() => { setTitle("Contact") }}> Contact </a> </li>
            </ul>

            {/* Menu Icons for Opening & Closing for smaller width devices */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list xsz:w-8 sm:w-9 xsz:p-1 text-white xsz:rounded-sm sm:rounded-md md:hidden active:scale-95 bg-site" viewBox="0 0 16 16" onClick={toggleMenu}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>

        </div>
    )
}
