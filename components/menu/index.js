import React,{useState} from "react";
import Header from "./Header";
import Nav from "./Nav";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = ()=> {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Header isOpen={openMenu}/>
            <Nav open={isOpen} isOpen={openMenu}/>
        </>
    )
}

export default NavBar
