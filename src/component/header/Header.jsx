import { useState } from "react";
import { Link } from "react-router"
import logo from "../../../public/favicon.png";
import { HiMiniBars3 } from "react-icons/hi2";
import { XMarkIcon } from '@heroicons/react/24/outline'

function Header() {
    const [open, setOpen] = useState(false);
    const [bannerOpen, setBannerOpen] = useState(true);

    return (
        <header className="bg-[#ffffff] sticky top-0 z-50">
            <nav className="py-4 container flex items-center justify-between">
                <Link to={"/"} className="block text-center w-24">
                    <img src={logo} alt="logo" className="w-24" />
                    <p className="pt-1.5 text-neutral-600 text-md font-medium">N A F İ M A</p>
                </Link>

                {/* Desktop Menyu */}
                <div className="hidden lg:flex text-nowrap items-center gap-[4vw] font-semibold">
                    <Link to={""} className="transition-all relative duration-300 popover-open">Identify Abuse
                        <div className="popover text-nowrap bg-[#DBDFEA] p-5 z-10 rounded-md">
                            <span className="polygon"></span>
                            <Link to={''}><p className="hover:text-[#474F7A] hover:underline transition-all duration-300 my-2">Understand relationship</p></Link>
                            <Link to={''}><p className="hover:text-[#474F7A] hover:underline transition-all duration-300 my-2">Power and control</p></Link>
                            <Link to={''}><p className="hover:text-[#474F7A] hover:underline transition-all duration-300 my-2">Why people abuse</p></Link>
                            <Link to={''}><p className="hover:text-[#474F7A] hover:underline transition-all duration-300 my-2">Cultural context</p></Link>
                        </div>
                    </Link>
                    <Link to={"/about"} className="hover:text-[#81689D] transition-all duration-300">Biz Kimik?</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300">Dəstək Ol</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300">Bizimlə Əlaqə</Link>
                    <Link to={"/FAQ"} className="hover:text-[#81689D] transition-all duration-300">FAQ</Link>
                    <Link to={'/donate'} className="bg-[#a93d92] hover:bg-[#543e6c] text-white transition-all duration-300 active:scale-90 p-2.5 w-32 text-center rounded-md animate-pulse">
                        Donate
                    </Link>
                </div>
                <button onClick={() => setOpen(true)} className="lg:hidden block cursor-pointer">
                    <HiMiniBars3 className="text-3xl text-[#543e6c]" />
                </button>
            </nav>
            {/* Sidebar Menyu (Mobil) */}
            <div className={`fixed inset-0 z-[99] bg-black/50 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setOpen(false)}></div>
            <div className={`fixed top-0 right-0 z-[999] w-3/4 max-w-sm h-full bg-white shadow-lg transition-transform transform ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col gap-4 font-medium text-lg">
                    <button onClick={() => setOpen(false)} className="cursor-pointer text-[#543e6c] self-end text-5xl pb-10">&times;</button>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Identify Abuse</Link>
                    <Link to={"/about"} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Biz Kimik?</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Dəstək Ol</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Bizimlə Əlaqə</Link>
                    <Link to={"/FAQ"} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>FAQ</Link>
                    <Link to={'/donate'} className="bg-[#81689D] hover:bg-[#543e6c] text-white transition-all duration-300 active:scale-90 p-3 w-full text-center rounded-md animate-pulse" onClick={() => setOpen(false)}>
                        Donate
                    </Link>
                </div>
            </div>

            {/*  Banner  */}
            <div className={`${bannerOpen ? 'block' : 'hidden'} relative bg-[#6e5888]`}>
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="pr-16 px-5 sm:px-16 sm:text-center">
                        <p className="font-medium text-white">
                            <span>Dəstək üçün istənilən vaxt Yardım Al bölməsinə keçid edin!</span>
                            <span className="block sm:ml-2 sm:inline-block">
                                <Link to='' className="font-bold text-white hover:underline">
                                    Daha çox
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
                        <button
                            onClick={() => setBannerOpen(false)}
                            className="flex cursor-pointer rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
