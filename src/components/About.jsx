import ProfilePic from '../assets/ProfilePic.png'

export default function About() {
    return (
        <div className="aboutComp xsz:py-14 sm:py-18 md:py-16 lg:py-20 xl:py-24 flex flex-col xsz:gap-y-5 md:gap-y-7" id="about">

            {/* Initial Heading of About Section */}
            <div className="mainHead flex flex-col items-center xsz:gap-y-1 md:gap-2 lg:gap-3">
                <h1 className="font-inter xsz:text-2xl sm:text-3xl xl:text-4xl text-secondary font-bold tracking-wide"> About Me </h1>
                <div className="xsz:h-1 xsz:w-20 sm:w-24 xsz:rounded-xl md:h-[3px] md:w-20 lg:w-24 xl:w-28 md:rounded-md xsz:drop-shadow-md md:drop-shadow-lg bg-site"> </div>
            </div>

            {/* Second Section regarding Image and Information */}
            <div className="mainSection xsz:flex-col flex md:flex-row justify-between md:px-10 xsz:gap-y-8 md:gap-10 lg:gap-20 xl:gap-24 lg:px-16 items-center">

                {/* Profile Image */}
                <img src={ProfilePic} alt="Profile Picture" className="xsz:w-2/4 sm:w-2/5 md:w-2/6 lg:w-4/12 xl:w-3/12 xsz:rounded-full md:p-3 xsz:border-5 xsz:active:border-t-site xsz:active:border-r-site md:active:border-r-transparent md:active:border-t-transparent md:border-3 border-site border-t-transparent border-r-transparent xsz:shadow-lg xsz:active:shadow-xl md:active:shadow-xl md:shadow-lg shadow-site hover:scale-105 hover:shadow-xl cursor-pointer ease-in duration-150" />

                {/* Content & Paragraph Section */}
                <div className="contentPara md:w-2/3 xsz:px-5 sm:px-8 xsz:space-y-3 sm:space-y-5 md:px-0 md:space-y-3 xl:space-y-7">

                    {/* Major Heading regarding myself */}
                    <h2 className = "font-poppins xsz:font-semibold xsz:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl xsz:text-secondary/80 sm:text-secondary/95 md:text-secondary/90"> Who I Am </h2>

                    <p className="xsz:text-[12px] sm:text-sm lg:text-base 2xl:text-lg font-inter text-secondary">
                        I'm a passionate front-end developer with a focus on creating clean, responsive, and user-friendly interfaces. This portfolio is built using React.js and Tailwind CSS, reflecting my commitment to modern web development practices.

                        <br /> <br />
                        I enjoy turning ideas into interactive digital experiences and continuously strive to improve my skills through real-world projects. Whether it's optimizing performance or crafting intuitive UI/UX, I aim to deliver high-quality solutions that make a lasting impact.
                    </p>

                    <a href = "/Resume.pdf" target = "_blank" rel = "noopener noreferrer" className="resumeBlock flex flex-row justify-start xsz:gap-x-2 lg:gap-3 items-center">

                        {/* External Link icon here */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-arrow-up-right xsz:w-4 xl:w-5 text-site cursor-pointer" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                        </svg>
                            
                        <h3 className = "xsz:text-sm sm:text-base xl:text-lg text-site font-inter hover:font-semibold ease-in duration-150"> Checkout Resume </h3>

                    </a>

                </div>

            </div>

        </div>
    )
}
