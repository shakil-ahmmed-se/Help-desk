import Link from "next/link";
import React from "react";
import Logo from "./help-desk.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Image 
        src={Logo}
        alt="Help desk Logo"
        width={70}
        quality={100}
        placeholder='empty'
         />
        <h1>Help Desk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
}
