"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; //To determine if the link is active? or not.
import { useState } from "react";
import '../globals.css';

const navLinks = [
  {name: "Register", href: "/register"},
  {name: "Login", href: "/login"},
  {name: "Forgot Password", href: "/forgot-password"}
]

export default function AuthLayout({ 
  children,
 } : {
  children : React.ReactNode;
 }) {

  //To determine if the link is active? or not.
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return(
    <>
      <div className="p-4 my-2">

        <div className="my-2">
          <input
            className="p-1 border border-black rounded-sm focus:outline-none"
            type="text"
            alt="codevolution"
            placeholder="enter your text here"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>

        {
          navLinks.map((link) => {

            const isActive = pathname.startsWith(link.href);
            
            return(
              <Link 
                key={link.name}
                href={link.href}
                className={isActive ? "font-bold mr-4 text-xl" : "text-blue-500 mr-4 text-xl"}
              >  
                {link.name}
              </Link>
            )
          })
        }

        {children}
      </div> 
    </>
  )
}