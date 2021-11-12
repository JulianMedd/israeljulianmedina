import React from "react";
import ActiveLink from "./ActiveLink";
import { MenuLinks } from "./Helper";

export const Nav = () => {
    return(
        <nav className="w-4/5 h-screen absolute top-0 left-0 z-50 bg-indigo-100 py-14 pl-24 pr-6">
            <ul className="h-full w-full text-2xl font-extralight py-4 text-gray-400 flex flex-col justify-evenly">
                {
                    MenuLinks.map((link)=><ActiveLink link={link}/>)
                }
            </ul>
        </nav>
    )
}

export default Nav;