import React from "react";
import { useRouter } from "next/router";

export const Header = ({isOpen}) => {
    const router = useRouter();

    return(
        <header className="h-14 w-full bg-indigo-700 flex justify-between items-center fixed px-6 top-0 z-40 md:hidden animate-apear ">
            <div className="flex items-center justify-start" onClick={() => router.push('/')}>
                <h1 className="text-white font-thin tracking-widest animate-pulse">ISRAEL JULIAN MEDINA</h1>
                <span className="ml-2 font-semibold text-white animate-pulse">|</span>
            </div>
            <svg onClick={()=>isOpen()} 
                 xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className="text-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </header>
    )
}

export default Header;