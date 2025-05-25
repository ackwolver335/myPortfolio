import {Code, LayoutDashboard, Cpu, Zap, MessageCircle, SlidersHorizontal, Clock, Users} from 'lucide-react'

export default function Skills() {
    return (
        <div className="skillSet xsz:py-14 sm:py-18 md:py-16 lg:py-20 xl:py-24 flex flex-col md:gap-4 lg:gap-6 xl:gap-7 items-center xsz:gap-y-5 bg-tempBG" id = "skills">

            {/* Main Heading Section */}
            <div className="mainHead flex flex-col items-center xsz:gap-y-1 md:gap-2 lg:gap-3">
                <h1 className="font-inter xsz:text-2xl sm:text-3xl xl:text-4xl text-secondary font-bold tracking-wide"> My Skills </h1>
                <div className="xsz:h-1 xsz:w-20 sm:w-24 xsz:rounded-xl md:h-[3px] md:w-20 lg:w-24 xl:w-28 md:rounded-md xsz:drop-shadow-md md:drop-shadow-lg bg-site"> </div>
            </div>

            {/* Paragraph Head regarding Skills Intro */}
            <h4 className = "text-secondary/60 font-poppins xsz:text-[12px] sm:text-sm xl:text-base"> Here are some of the Skills I've acquired throughout my Career </h4>

            {/* Skills Block */}
            <div className="skillBlock grid xsz:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-col-3 xsz:pt-5 md:pt-8 xl:pt-12 xsz:gap-y-10 md:gap-x-24 md:gap-y-12 lg:gap-y-16 xl:gap-x-5 xl:gap-y-6 2xl:gap-y-10 2xl:gap-x-12">

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <Code className = "xsz:p-2 sm:p-3 rounded-full text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 xsz:h-12 sm:w-14 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Web Development </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> HTML, CSS & Javascript </h5>
                </div>

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <LayoutDashboard className = "xsz:p-2 sm:p-3 xsz:rounded-lg sm:rounded-md text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 sm:w-14 xsz:h-12 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> UI/UX Design </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> Uizard & Canva </h5>
                </div>

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <Cpu className = "xsz:p-2 sm:p-3 xsz:rounded-lg sm:rounded-md text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 sm:w-14 xsz:h-12 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Backend Dev </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> Next.js & Express.js </h5>
                </div>

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <Zap className = "xsz:p-2 sm:p-3 xsz:rounded-lg sm:rounded-md text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 sm:w-14 xsz:h-12 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Performance Eff. </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> Speed & Efficiency </h5>
                </div>

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <MessageCircle className = "xsz:p-2 sm:p-3 xsz:rounded-lg sm:rounded-md text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 sm:w-14 xsz:h-12 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Communication </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> Clear & Effective </h5>
                </div>

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <SlidersHorizontal className = "xsz:p-2 sm:p-3 xsz:rounded-lg sm:rounded-md text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 sm:w-14 xsz:h-12 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Problem Solving </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> Analytical Thinking </h5>
                </div>

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <Clock className = "xsz:p-2 sm:p-3 rounded-full text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 xsz:h-12 sm:w-14 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Time Management </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> Efficient & Organized </h5>
                </div>

                <div className="skills flex flex-col items-center xsz:gap-y-2 md:gap-3 bg-white sm:shadow-lg xsz:shadow-md xsz:px-12 xsz:py-8 sm:px-16 sm:py-10 md:px-8 lg:px-12 md:py-4 lg:py-6 md:pb-8 xl:pb-14 rounded-lg cursor-default hover:scale-105 hover:shadow-lg ease-in duration-150 xsz:active:shadow-site">
                    <Users className = "xsz:p-2 sm:p-3 xsz:rounded-lg sm:rounded-md text-site xsz:bg-site/10 md:bg-site/5 lg:bg-site/10 xsz:w-12 sm:w-14 xsz:h-12 sm:h-14" />
                    <h3 className = "xsz:text-lg sm:text-2xl md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Team Collaboration </h3>
                    <h5 className = "font-poppin xsz:font-semibold xsz:text-sm sm:text-base text-secondary/60 md:font-normal md:text-base xl:text-lg xl:font-medium"> Leadership & Support </h5>
                </div>

            </div>

        </div>
    )
}
