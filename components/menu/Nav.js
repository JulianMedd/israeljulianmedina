import React from "react";
import ActiveLink from "./ActiveLink";
import { MenuLinks } from "./Helper";

export const Nav = ({open, isOpen}) => {
    return(
        <nav className={`w-4/5 h-screen absolute top-0 ${ open ? 'left-0 ' : '-left-full'} md:left-0 md:w-60 z-50 bg-indigo-200 py-14 pl-18 md:pl-2 pr-6 flex items-center justify-evenly duration-700`}>
            <div className="absolute top-4 right-4 text-indigo-700 md:hidden text-2xl font-light" onClick={()=>isOpen()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            <h2 className="textRotate text-gray-400 font-thin tracking-widest">
                I S R A E L  J U L I A N  M E D I N A
            </h2>
            <ul className="h-full text-2xl font-extralight py-4 text-gray-400 flex flex-col justify-evenly cursor-pointer animate-apear">
                {
                    MenuLinks.map((link)=><ActiveLink link={link} key={link.name}/>)
                }
            </ul>
        </nav>
    )
}

export default Nav;