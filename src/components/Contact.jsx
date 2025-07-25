import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import Alert from './Alert';
import emailjs from '@emailjs/browser'

export default function Contact() {

    // defining use state for alert component
    const [alert, setAlert] = useState({
        show: false,
        type: 'Success',
        message: "Message sent Successfully !",
    })

    // method for clearing all the data after sending the email
    const clearAllData = () => {
        let sampleData = '';
        [setUserName,setUserEmail,setUserSubject,setUserMessage].forEach(setter => setter(sampleData)); 
    }

    // setting some state regarding EmailJS service's data
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userSubject,setUserSubject] = useState('');
    const [userMessage,setUserMessage] = useState('');

    // details regarding Email JS Services
    const serviceID = "service_ay3pp3s";
    const publicKey = "9RWkKmcNIlGUX9B0O";
    const templateIDAR = "template_981d9fk";                        // template ID for autoreply
    const templateIDCU = "template_w06lkrl";                        // To be sent to a Site Owner

    // method for sending and handling Email Requests
    const submitData = (e) => {

        // preventing the default reload
        e.preventDefault();

        // checking if the user have already send the data
        const lastCheck = localStorage.getItem('emailData');

        // sending email if the localStorage is empty
        if(!lastCheck){

            // setting params for sending data
            const templateParams = {
                to_email : userEmail,
                from_name : userName,
                user_subject : userSubject,
                user_message : userMessage
            }

            // sending autoreply to the user via emailjs services
            emailjs.send(serviceID,templateIDAR,templateParams,publicKey).then(() => {
                clearAllData();
            }).catch(() => {
                setAlert({show : true,type : 'Warning',message : 'Error in Fetching Data !'});
                setTimeout(() => {
                    setAlert(prev => ({ ...prev,show : false}));
                },2500);

                clearAllData();
            })

            // sending mail to developer or coder regarding fetching data to him/her
            emailjs.send(serviceID,templateIDCU,templateParams,publicKey).then(() => {
                setAlert({ show: true, type: 'Success',message: 'Thanks for your feedback !'})
                
                setTimeout(() => {
                    setAlert(prev => ({ ...prev, show: false}));
                },2500);
                clearAllData();
            }).catch(() => {
                setAlert({ show: true,type: 'Warning',message: 'Error in Fetching Data !'});

                setTimeout(() => {
                    setAlert(prev => ({ ...prev, show: false}))
                },2500);
                clearAllData();
            })

            // creating tokens not to send the message multiple times
            localStorage.setItem("emailData",JSON.stringify({userData: 'DataSaved'}));

        } else {
            setAlert({ show: true, type: 'Warning', message: 'Data already sent !'})
            clearAllData();

            setTimeout(() => {
                setAlert(prev => ({...prev,show: false}));
            },2500);
        }
        
    }

    return (
        <div className="contentContainer xsz:py-14 sm:py-18 xsz:gap-y-5 md:py-16 lg:py-20 xl:py-24 flex flex-col md:gap-4 lg:gap-6 xl:gap-7 items-center bg-tempBG" id="contact">

            <Alert alert={alert} />

            {/* Heading of Contact Section */}
            <div className="mainHead flex flex-col xsz:gap-y-1 items-center md:gap-2 lg:gap-3">
                <h1 className="font-inter xsz:text-2xl sm:text-3xl xl:text-4xl text-secondary font-bold tracking-wide"> Get In Touch </h1>
                <div className="xsz:h-1 xsz:w-20 sm:w-24 xsz:rounded-xl md:h-[3px] md:w-20 lg:w-24 xl:w-28 md:rounded-md xsz:drop-shadow-md md:drop-shadow-lg bg-site"> </div>
            </div>

            {/* Para regarding Section's Intro */}
            <h4 className="text-secondary/60 font-poppins md:text-sm xsz:text-[12px] sm:text-sm xl:text-base"> Have a project in mind or want to collaborate? Feel freet to reach out! </h4>

            <div className="contactSection grid md:grid-cols-1 lg:grid-cols-2 xsz:pt-5 md:pt-8 xl:pt-10 xsz:gap-y-10 md:gap-y-8 lg:gap-x-14 xl:gap-x-20">

                <div className="contactInfo flex flex-col justify-start bg-white xsz:rounded-lg xsz:shadow-lg md:rounded-md lg:rounded-xl lg:shadow-lg md:shadow-md xsz:px-6 xsz:py-4 sm:px-8 sm:py-6 md:px-8 md:py-6 sm:w-100 xsz:gap-4 md:gap-5 xl:gap-7">

                    <h3 className="xsz:text-lg sm:text-xl lg:text-2xl font-inter xsz:font-bold xsz:text-secondary/80 sm:font-semibold sm:text-secondary/90"> Contact Information </h3>

                    <div className="details flex flex-col justify-start xsz:gap-4 md:gap-5 xl:gap-7">

                        {/* Email Detail's Block */}
                        <div className="emailID flex flex-row justify-start xsz:gap-3 sm:gap-4 md:gap-5 items-center">

                            <Mail className="text-site bg-site/25 xsz:w-8 xsz:h-8 sm:w-10 sm:h-10 sm:p-2 sm:rounded-xl xsz:p-1 xsz:rounded-md md:w-12 md:h-12 md:px-3 md:rounded-full" />

                            <div className="xsz:space-y-1 sm:space-y-0 md:space-y-1">
                                <h4 className="font-inter font-semibold text-secondary/80 md:text-lg xsz:text-base"> Email </h4>
                                <p className="font-poppins font-normal text-secondary text-sm"> abhaych335@gmail.com </p>
                            </div>

                        </div>

                        {/* Phone/Contact Details Block */}
                        <div className="phoneNB flex flex-row justify-start xsz:gap-3 sm:gap-4 md:gap-5 items-center">

                            <Phone className="text-site bg-site/25 xsz:w-8 xsz:h-8 sm:w-10 sm:h-10 sm:p-2 sm:rounded-xl xsz:p-1 xsz:rounded-md md:w-12 md:h-12 md:px-3 md:rounded-full" />

                            <div className="xsz:space-y-1 sm:space-y-0 md:space-y-1">
                                <h4 className="font-inter font-semibold text-secondary/80 md:text-lg xsz:text-base"> Phone </h4>
                                <p className="font-poppins font-normal text-secondary text-sm"> +91-8130621593 </p>
                            </div>

                        </div>

                        {/* Location or Nearby Address Detail's Block */}
                        <div className="adddressBD flex flex-row justify-start xsz:gap-3 sm:gap-4 md:gap-5 items-center">

                            <MapPin className="text-site bg-site/25 xsz:w-8 xsz:h-8 sm:w-10 sm:h-10 sm:p-2 sm:rounded-xl xsz:p-1 xsz:rounded-md md:w-12 md:h-12 md:px-3 md:rounded-full" />

                            <div className="xsz:space-y-1 sm:space-y-0 md:space-y-1">
                                <h4 className="font-inter font-semibold text-secondary/80 md:text-lg xsz:text-base"> Location </h4>
                                <p className="font-poppins font-normal text-secondary text-sm"> New Delhi, Delhi - India </p>
                            </div>

                        </div>

                    </div>

                    {/* Social Links */}
                    <div className="socialIcon xsz:space-y-4 md:space-y-3 lg:space-y-5 xl:space-y-4">

                        <h4 className="xsz:text-base sm:text-lg lg:text-xl font-inter text-secondary/80 xsz:font-bold sm:font-semibold"> Connect With Me </h4>

                        <div className="flex flex-row xsz:gap-3 sm:gap-5 md:gap-4">

                            {/* Twitter Link or Reference */}
                            <a href="https://x.com/AbhayCh84760" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x xsz:w-10 xsz:h-10 xsz:p-2 active:scale-90 md:w-12 md:h-12 md:px-3 bg-site/15 hover:bg-site/30 ease-in duration-150 rounded-full text-site" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </a>

                            {/* LinkdIn Profile Link */}
                            <a href="https://www.linkedin.com/in/abhaychaudhary335/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin xsz:w-10 xsz:h-10 xsz:p-2 active:scale-90 md:w-12 md:h-12 md:px-3 bg-site/15 hover:bg-site/30 ease-in duration-150 rounded-full text-site" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>

                            {/* Github Profile or Dashboard Link */}
                            <a href="https://github.com/ackwolver335" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github xsz:w-10 xsz:h-10 xsz:p-2 active:scale-90 md:w-11 md:h-11 md:px-2 bg-site/15 hover:bg-site/30 ease-in duration-150 rounded-full text-site" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </a>

                        </div>

                    </div>

                </div>

                {/* Block in order to retrive details from the User */}
                <div className="detailedForm flex flex-col justify-start bg-white xsz:rounded-lg xsz:shadow-lg md:rounded-md lg:rounded-xl lg:shadow-lg md:shadow-md xsz:px-6 xsz:py-4 sm:px-8 sm:py-6 md:px-8 xsz:gap-3 md:py-6 sm:w-100 md:gap-5">

                    <h3 className="xsz:text-lg sm:text-xl lg:text-2xl font-inter xsz:font-bold xsz:text-secondary/80 sm:font-semibold text-secondary/90"> Send Me a Message </h3>

                    {/* form regarding information retrival */}
                    <form className="flex flex-col xsz:gap-3 md:gap-y-3 lg:gap-y-5 justify-start" onSubmit={submitData}>

                        {/* userName */}
                        <div className="flex flex-col justify-star xsz:gap-3 md:gap-y-2">
                            <label htmlFor="userName" className="font-inter font-normal text-secondary/80 xsz:text-sm lg:text-base"> Name </label>
                            <input type="text" placeholder="Your Name" id="userName" value={userName} className="font-poppins xsz:text-[12px] sm:text-sm border-2 md:opacity-80 xsz:border-secondary/30  md:border-secondary/50 focus:border-2 focus:border-site focus:outline-none xsz:rounded-sm xsz:focus:rounded-md xsz:px-2 xsz:py-1 sm:px-3 md:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserName(e.target.value) }} />
                        </div>

                        {/* user's Mail */}
                        <div className="flex flex-col justify-start xsz:gap-3 md:gap-y-2">
                            <label htmlFor="userMail" className="font-inter font-normal text-secondary/80 xsz:text-sm lg:text-base"> Email </label>
                            <input type="email" placeholder="your.name@gmail.com" id="userMail" value={userEmail} className="font-poppins xsz:text-[12px] sm:text-sm border-2 md:opacity-80 xsz:border-secondary/30  md:border-secondary/50 focus:border-2 focus:border-site focus:outline-none xsz:rounded-sm xsz:focus:rounded-md xsz:px-2 xsz:py-1 sm:px-3 md:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserEmail(e.target.value) }} />
                        </div>

                        {/* user's Subject or Purpose */}
                        <div className="flex flex-col justify-start xsz:gap-3 md:gap-y-2">
                            <label htmlFor="userSubject" className="font-inter font-normal text-secondary/80 xsz:text-sm lg:text-base"> Subject </label>
                            <input type="text" placeholder="Subject/Purpose" id="userSubject" value={userSubject} className="font-poppins xsz:text-[12px] sm:text-sm border-2 md:opacity-80 xsz:border-secondary/30  md:border-secondary/50 focus:border-2 focus:border-site focus:outline-none xsz:rounded-sm xsz:focus:rounded-md md:px-3 xsz:px-2 xsz:py-1 sm:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserSubject(e.target.value) }} />
                        </div>

                        <div className="flex flex-col justify-start xsz:gap-3 md:gap-y-2">
                            <label htmlFor="userMessage" className="font-inter font-normal text-secondary/80 xsz:text-sm lg:text-base"> Message </label>
                            <textarea type="text" rows="4" placeholder="Your Message here..." id="userMessage" value={userMessage} className="resize-none font-poppins xsz:text-[12px] sm:text-sm border-2 md:opacity-80 xsz:border-secondary/30  md:border-secondary/50 focus:border-2 focus:border-site focus:outline-none xsz:rounded-sm xsz:focus:rounded-md xsz:px-2 xsz:py-1 sm:px-3 md:px-3 sm:py-2 md:rounded-md md:focus:rounded-lg lg:focus:rounded-xl ease-in duration-100" required onChange={(e) => { setUserMessage(e.target.value) }}> </textarea>
                        </div>

                        <button type="submit" className="font-inter bg-site/70 xsz:py-1 xsz:rounded-sm sm:rounded-md xsz:shadow-lg active:scale-95 md:py-2 md:rounded-md lg:rounded-lg hover:rounded-xl hover:bg-site/90 cursor-pointer md:shadow-md hover:shadow-lg ease-in duration-150 text-white xsz:text-sm md:mt-2"> Send Message </button>

                    </form>

                </div>

            </div>

        </div>
    )
}
