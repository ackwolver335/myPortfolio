// required images
import InotebookFD from '../assets/InotebookFD.png'
import DLModel from '../assets/DLModel.png'
import TextUtils from '../assets/TextUtils.png'
import Image2pdf from '../assets/Image2pdf.png'

// required icons from react
import {Code, ArrowRight, Code2Icon} from 'lucide-react'

export default function Projects() {
    return (
        <div className="projectSection md:py-16 lg:py-20 xl:py-24 flex flex-col md:gap-5 lg:gap-6 xl:gap-7 items-center" id="projects">

            {/* Main Heading of Project Section */}
            <div className="mainHead flex flex-col items-center md:gap-2 lg:gap-3">
                <h1 className="font-inter md:text-2xl lg:text-3xl xl:text-4xl text-secondary font-bold tracking-wide"> My Projects </h1>
                <div className="md:h-[3px] md:w-20 lg:w-24 xl:w-28 md:rounded-md md:drop-shadow-lg bg-site"> </div>
            </div>

            {/* Para Heading regarding Project Section Intro */}
            <h4 className="text-secondary/60 font-poppins md:text-sm xl:text-base"> Here are some of my recent projects. Each one represents a unique challenge & solution. </h4>

            {/* Projects Block */}
            <div className="projectsBlock grid md:grid-cols-2 xl:grid-cols-3 md:pt-8 xl:pt-10 md:gap-x-24 md:gap-y-12 md:px-10 lg:px-20 lg:gap-y-16">

                <div className="perproject flex flex-col gap-0 items-start md:shadow-md rounded-md xl:rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-site ease-in duration-150">

                    {/* Project Preview */}
                    <img src={InotebookFD} alt="Inotebook FullStack Project" className = "md:rounded-t-md xl:rounded-t-xl" />

                    <div className="projectDetails flex flex-col justify-start md:px-5 md:py-4 md:gap-5">

                        {/* Initial Basic elements */}
                        <div className = "md:space-y-2">
                            <h3 className="md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> InotebookFD </h3>
                            <p className="font-poppins text-secondary/60 md:font-normal md:text-sm xl:font-medium">
                                iNotebook is a fast, responsive, and user-friendly online note-keeping web application.
                            </p>
                        </div>

                        {/* List regarding skills used in it */}
                        <ul className="flex flex-row md:gap-2">
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> React.js </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Node.js </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Express.js </li>
                        </ul>

                        {/* Go Through Links */}
                        <div className="flex flex-row justify-between items-center">

                            <a href = "https://github.com/ackwolver335/inotebookFD" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-[13px]">
                                View Project <ArrowRight className = "md:w-5 md:h-5 md:ml-1 xl:h-5" />
                            </a>

                            <a href = "https://github.com/ackwolver335/inotebookFD" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-[13px]">
                                Source Code <Code2Icon className = "md:w-5 md:h-5 md:ml-1 xl:h-5" />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="perproject flex flex-col gap-0 items-start md:shadow-md rounded-md xl:rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-site ease-in duration-150">

                    {/* Project Preview */}
                    <img src={DLModel} alt="Inotebook FullStack Project" className = "md:rounded-t-md xl:rounded-t-xl" />

                    <div className="projectDetails flex flex-col justify-start md:px-5 md:py-4 md:gap-5">

                        {/* Initial Basic elements */}
                        <div className = "md:space-y-2">
                            <h3 className="md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Sentiment Analysis </h3>
                            <p className="font-poppins text-secondary/60 md:font-normal md:text-sm xl:font-medium">
                                A deep learning model designed for sentiment analysis using ResNet and GoogleNet-inspired architectures.
                            </p>
                        </div>

                        {/* List regarding skills used in it */}
                        <ul className="flex flex-row md:gap-2">
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Tensorflow </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Keras </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Pandas </li>
                        </ul>

                        {/* Go Through Links */}
                        <div className="flex flex-row justify-between items-center ">

                            <a href = "https://github.com/ackwolver335/SentimentAnalysis-DL" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-[13px]">
                                View Project <ArrowRight className = "md:w-5 md:h-5 md:ml-1 xl:h-5" />
                            </a>

                            <a href = "https://github.com/ackwolver335/SentimentAnalysis-DL" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-[13px]">
                                Source Code <Code2Icon className = "md:w-5 md:h-5 md:ml-1 xl:h-5" />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="perproject flex flex-col gap-0 items-start md:shadow-md rounded-md xl:rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-site ease-in duration-150">

                    {/* Project Preview */}
                    <img src={TextUtils} alt="Inotebook FullStack Project" className = "md:rounded-t-md xl:rounded-t-xl" />

                    <div className="projectDetails flex flex-col justify-start md:px-5 md:py-4 md:gap-5">

                        {/* Initial Basic elements */}
                        <div className = "md:space-y-2">
                            <h3 className="md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> textUtils </h3>
                            <p className="font-poppins text-secondary/60 md:font-normal md:text-sm xl:font-medium">
                                It is a general trial project done with React JS we could consider it as a React App regarding Text Utilities.
                            </p>
                        </div>

                        {/* List regarding skills used in it */}
                        <ul className="flex flex-row md:gap-2">
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> React.js </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Bootstrap </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Javascript </li>
                        </ul>

                        {/* Go Through Links */}
                        <div className="flex flex-row justify-between items-center ">

                            <a href = "https://github.com/ackwolver335/textUtils" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-[13px]">
                                View Project <ArrowRight className = "md:w-5 md:h-5 md:ml-1 xl:h-5" />
                            </a>

                            <a href = "https://github.com/ackwolver335/textUtils" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-[13px]">
                                Source Code <Code2Icon className = "md:w-5 md:h-5 md:ml-1 xl:h-5" />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="perproject flex flex-col gap-0 items-start md:shadow-md rounded-md xl:rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-site ease-in duration-150 xl:hidden">

                    {/* Project Preview */}
                    <img src={Image2pdf} alt="Inotebook FullStack Project" className = "md:rounded-t-md xl:rounded-t-xl" />

                    <div className="projectDetails flex flex-col justify-start md:px-5 md:py-4 md:gap-5">

                        {/* Initial Basic elements */}
                        <div className = "md:space-y-2">
                            <h3 className="md:text-xl text-secondary/80 xl:text-2xl font-inter font-bold"> Image2PDF Converter </h3>
                            <p className="font-poppins text-secondary/60 md:font-normal md:text-sm xl:font-medium">
                                It contains a general image to pdf converter for conversion of images to pdf within few seconds of stuff.
                            </p>
                        </div>

                        {/* List regarding skills used in it */}
                        <ul className="flex flex-row md:gap-2">
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Tkinter </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> Python3 </li>
                            <li className = "bg-site/20 rounded-md md:px-3 md:py-1 font-poppins font-semibold text-site md:text-sm xl:text-base"> PyInstaller </li>
                        </ul>

                        {/* Go Through Links */}
                        <div className="flex flex-row justify-between items-center ">

                            <a href = "https://github.com/ackwolver335/Image2pdf-GUI" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-base">
                                View Project <ArrowRight className = "md:w-5 md:h-5 md:ml-1 xl:w-6 xl:h-6" />
                            </a>

                            <a href = "https://github.com/ackwolver335/Image2pdf-GUI" className = "flex md:text-sm font-inter md:font-semibold text-secondary/90 hover:text-site hover:scale-105 hover:font-bold ease-in duration-150 xl:text-base">
                                Source Code <Code2Icon className = "md:w-5 md:h-5 md:ml-1 xl:w-6 xl:h-6" />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            {/* Button regarding further projects go through Link */}
            <a href = "https://github.com/ackwolver335?tab=repositories" className = "flex flex-row font-inter hover:font-semibold md:text-sm xl:text-base xl:px-4 hover:scale-105 items-center bg-site/90 text-white md:mt-3 xl:mt-6 md:px-3 md:py-2 shadow-md hover:shadow-xl hover:bg-site rounded-md ease-in duration-150">
                View all Projects <ArrowRight className = "text-white md:w-5 md:ml-1" />
            </a>

        </div>
    )
}
