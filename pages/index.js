import { useState } from "react";
import Header from "../components/menu/Header";
import Nav from "../components/menu/Nav";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main>
      <Header isOpen={()=>setOpenMenu(!openMenu)}/>
      <Nav open={openMenu}/>
    </main>
  )
}