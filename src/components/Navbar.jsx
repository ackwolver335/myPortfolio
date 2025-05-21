// importing required elements

export default function Navbar() {
    return (
        <div className = "navBar fixed w-full bg-white/80 backdrop-blur-2xl flex md:flex-row justify-between items-center xsz:py-3 xsz:px-4 md:px-5 xl:px-9 2xl:px-14 2xl:py-5 xl:py-4 xsz:shadow-md xl:shadow-lg">

            <h1 className = "xsz:text-lg xl:text-xl xsz:font-bold text-site font-poppins cursor-pointer"> Portfolio </h1>

            <ul className = "flex md:flex-row font-poppins md:text-sm md:gap-4 2xl:gap-6 xl:text-base text-secondary">
                <li> <a href = "#" className = "hover:text-site ease-in duration-150 hover:text-shadow-black"> Home </a> </li>
                <li> <a href = "#about" className = "hover:text-site ease-in duration-150 hover:text-shadow-black"> About </a> </li>
                <li> <a href = "#skills" className = "hover:text-site ease-in duration-150 hover:text-shadow-black"> Skills </a> </li>
                <li> <a href = "#" className = "hover:text-site ease-in duration-150 hover:text-shadow-black"> Projects </a> </li>
                <li> <a href = "#" className = "hover:text-site ease-in duration-150 hover:text-shadow-black"> Contact </a> </li>
            </ul>

        </div>
    )
}
