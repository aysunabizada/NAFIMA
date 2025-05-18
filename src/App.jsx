import { Link, Route, Routes, useLocation } from "react-router";
import Layout from "./layout/Layout";
import Main from "./component/main/Main";
import ErrorPage from "./component/error/ErrorPage";
import FAQ from "./component/main/FAQ";
import { useEffect } from "react";
import About from "./component/main/About";
import Donate from "./component/main/Donate";
import PrivacyPolicy from "./component/main/PrivacyPolicy";
import { HiChevronDoubleUp } from 'react-icons/hi2';
import { ChatBubbleLeftRightIcon, FaceSmileIcon, PhoneIcon } from '@heroicons/react/24/outline';
import WhatIsAbuse from "./component/main/WhatIsAbuse";
import Statistics from "./component/main/Statistics";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        window.scroll(0, 0);
        document.title = "NAFİMA - Səssizləri eşit, ədaləti yaşat!"
    }, [pathname]);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', function () {
        const button = document.querySelector('.scroll-to-top');
        const quickCall = document.querySelector('.quick-call');
        const scrollPos = window.scrollY;
        const vwHeight = window.innerHeight;
        button.style.display = (scrollPos > (vwHeight * 0.9)) ? 'block' : 'none';
        quickCall.style.display = (scrollPos > (vwHeight * 0.9)) ? 'block' : 'none';
    });

    return (
        <>
            <div onClick={scrollToTop} className="scroll-to-top bg-[#000] p-4 text-white rounded-full cursor-pointer shadow-md hidden hover:bg-gray-900 transition-all duration-300 fixed right-6 bottom-28 z-20">
                <HiChevronDoubleUp className="text-xl" />
            </div>
            <div className="fixed hidden bottom-0 w-full bg-[#F0ECE5] z-20 min-h-[6rem] quick-call">
                <div className="hidden md:flex justify-center text-center items-center mt-4.5 gap-[6rem]">
                    <Link to='tel:+99450XXXXXXX' className="flex items-center border-r pr-5 quick-call-tip gap-3  hover:text-[#a93d92] transition-all duration-300">
                        <div className="rounded-full bg-[#31304D] p-4 icon transition-all duration-300">
                            <PhoneIcon className="h-7 w-7 text-white" />
                        </div>
                        <div className="font-bold text-xl">
                            Zəng edin
                            <p className="font-normal text-sm"> +994 XX XXX XX XX</p>
                        </div>
                    </Link>
                    <Link to='https://wa.me/+99450XXXXXXX' className="flex items-center quick-call-tip gap-3  hover:text-[#a93d92] transition-all duration-300">
                        <div className="rounded-full bg-[#31304D] p-4 icon transition-all duration-300">
                            <ChatBubbleLeftRightIcon className="h-7 w-7 text-white" />
                        </div>
                        <div className="font-bold text-xl">
                            Bizə yazın
                            <p className="font-normal text-sm">7/24 açıq xətt</p>
                        </div>
                    </Link>
                    <Link to='https://chatgpt.com' className="flex items-center border-l pl-5 quick-call-tip gap-3  hover:text-[#a93d92] transition-all duration-300">
                        <div className="rounded-full bg-[#31304D] p-4 icon transition-all duration-300">
                            <FaceSmileIcon className="h-7 w-7 text-white" />
                        </div>
                        <div className="font-bold text-xl">
                            AI ilə danış
                            <p className="font-normal text-sm"> yaxın zamanda...</p>
                        </div>
                    </Link>
                </div>
                <div className="flex md:hidden justify-center px-3 mx-auto text-center items-center mt-3 gap-[2rem]">
                    <Link to='tel:+99450XXXXXXX' className="flex flex-col border-r pr-5 items-center quick-call-tip gap-1 hover:text-[#a93d92] transition-all duration-300">
                        <div className="rounded-full bg-[#31304D] p-4 icon transition-all duration-300">
                            <PhoneIcon className="h-4 w-4 text-white" />
                        </div>
                        <div className="font-semibold text-sm text-nowrap">
                            Zəng edin
                        </div>
                    </Link>
                    <Link to='https://wa.me/+99450XXXXXXX' className="flex flex-col items-center quick-call-tip gap-1 hover:text-[#a93d92] transition-all duration-300">
                        <div className="rounded-full bg-[#31304D] p-4 icon transition-all duration-300">
                            <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-semibold text-sm text-nowrap">
                            Bizə yazın
                        </div>
                    </Link>
                    <Link to='https://chatgpt.com' className="flex flex-col border-l pl-5 items-center quick-call-tip gap-1 hover:text-[#a93d92] transition-all duration-300">
                        <div className="rounded-full bg-[#31304D] p-4 icon transition-all duration-300">
                            <FaceSmileIcon className="h-4 w-4 text-white" />
                        </div>
                        <div className="font-semibold text-sm text-nowrap">
                            AI ilə danış
                        </div>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Main />} />
                    <Route path="/whatIsAbuse" element={<WhatIsAbuse />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/FAQ" element={<FAQ />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/donate" element={<Donate />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App
