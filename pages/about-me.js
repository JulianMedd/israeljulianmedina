import React from "react";
import { useState } from "react";
import Header from "../components/menu/Header";
import Nav from "../components/menu/Nav";

export const AboutMe = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <main>
            <Header isOpen={()=>setOpenMenu(!openMenu)}/>
            <Nav open={openMenu}/>
            <div
            className="w-screen h-screen pt-16">
                <h1 className="textRotate">texto prueba</h1>
            </div>
        </main>
    )
}

export default AboutMe;