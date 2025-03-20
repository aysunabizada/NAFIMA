import { useState } from "react";
import { Link } from "react-router"
import logo from "../../../public/favicon.png";
import { HiMiniBars3 } from "react-icons/hi2";


function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[#ffffff] sticky top-0 z-50">
            <nav className="py-4 container flex items-center justify-between">
                <Link to={"/"} className="block text-center w-24">
                    <img src={logo} alt="logo" className="w-24" />
                    <p className="pt-1.5 text-neutral-600 text-md font-medium">N A F İ M A</p>
                </Link>

                {/* Desktop Menyu */}
                <div className="hidden lg:flex items-center gap-6 font-medium">
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300">Identify Abuse</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300">Biz Kimik?</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300">Dəstək Ol</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300">Bizimlə Əlaqə</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300">FAQ</Link>
                    <Link to={''} className="bg-[#81689D] hover:bg-[#543e6c] text-white transition-all duration-300 active:scale-90 p-2.5 w-32 text-center rounded-md animate-pulse">
                        Donate
                    </Link>
                </div>
                <button onClick={() => setOpen(true)} className="lg:hidden block cursor-pointer">
                    <HiMiniBars3 className="text-3xl text-[#543e6c]" />
                </button>
            </nav>

            {/* Sidebar Menyu (Mobil) */}
            <div className={`fixed inset-0 bg-black/50 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setOpen(false)}></div>
            <div className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg transition-transform transform ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col gap-4 font-medium text-lg">
                    <button onClick={() => setOpen(false)} className="cursor-pointer text-[#543e6c] self-end text-5xl pb-10">&times;</button>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Identify Abuse</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Biz Kimik?</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Dəstək Ol</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>Bizimlə Əlaqə</Link>
                    <Link to={""} className="hover:text-[#81689D] transition-all duration-300" onClick={() => setOpen(false)}>FAQ</Link>
                    <Link to={''} className="bg-[#81689D] hover:bg-[#543e6c] text-white transition-all duration-300 active:scale-90 p-3 w-full text-center rounded-md animate-pulse">
                        Donate
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
