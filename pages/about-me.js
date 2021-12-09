import React from "react";
import Hero from "../components/hero/Hero";
import NavBar from "../components/menu";

export const AboutMe = () => {

    return (
        <main>
            <NavBar/>
            <div className="w-screen h-screen pt-16">
                <div>
                    <Hero/>
                </div>
            </div>
        </main>
    )
}

export default AboutMe;