import React from "react";

export const Header = () => {
    return(
        <header className="h-14 w-full bg-indigo-700 flex justify-between items-center fixed px-6 top-0 z-40 md:hidden">
            <div className="flex items-center justify-start">
                <h1 className="text-white font-thin tracking-widest animate-apear">I S R A E L  J U L I A N  M E D I N A </h1>
                <span className="ml-2 font-semibold text-white animate-pulse">|</span>
            </div>
            <svg onClick={()=>console.log("abrir menu")} 
                 xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className="text-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </header>
    )
}

export default Header;