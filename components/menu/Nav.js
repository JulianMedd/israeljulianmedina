import React from "react";
import ActiveLink from "./ActiveLink";
import { MenuLinks } from "./Helper";

export const Nav = ({open}) => {
    return(
        <nav className={`w-4/5 h-screen absolute top-0 ${ open ? 'left-0 ' : '-left-full'} md:left-0 md:w-60 z-50 bg-indigo-200 py-14 pl-18 md:pl-2 pr-6 flex items-center justify-evenly duration-700`}>
            <h2 className="textRotate text-gray-400 font-thin tracking-widest">
                I S R A E L  J U L I A N  M E D I N A
            </h2>
            <ul className="h-full text-2xl font-extralight py-4 text-gray-400 flex flex-col justify-evenly animate-apear">
                {
                    MenuLinks.map((link)=><ActiveLink link={link}/>)
                }
            </ul>
        </nav>
    )
}

export default Nav;