"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MainBtn from "../Buttons/MainBtn";


const Nav = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className=" bg-white w-full fixed top-0 left-0 z-[10] flex items-center justify-between px-[5.5vw]  py-3 lg:py-5 ">
      <div className="grow lg:grow-0">
        <Link href={"/"}  className="font-bold text-2xl">ABDUL AHAD</Link>
      </div>
      {/* <img className='lg:w-[12%] w-[28%] md:w-[15%] grow' src="/Logos/Gatekod.png" alt="Logo Of GateKod" /> */}

      {/* Hamburger Icon for Mobile */}
      <div
        className="lg:hidden block relative z-[1345] cursor-pointer"
        onClick={toggleMenu}
      >
        {!isMenuOpen ? (
          <>
            <div className="w-6 h-[0.15rem]  bg-black mb-1"></div>
            <div className="w-6 h-[0.15rem]  bg-black mb-1"></div>
            <div className="w-6 h-[0.15rem] bg-black"></div>
          </>
        ) : (
          <div className="text-4xl font-bold">&times;</div> // Cross Icon
        )}
      </div>

      {/* Desktop Menu */}
      <div className="lg:flex hidden gap-7 font-[600]">
        <Link className={pathname === '/' ? 'underline decoration-4  opacity-100 underline-offset-8' : ''} href="/">Home</Link>
        <Link className={pathname === '/services' ? 'underline decoration-4  opacity-100 underline-offset-8' : ''} href="/services">My Services</Link>
        <Link className={pathname === '/work' ? 'underline decoration-4  opacity-100 underline-offset-8' : ''}  href="/work">My Work</Link>
        <Link className={pathname === '/contact' ? 'underline decoration-4  opacity-100 underline-offset-8' : ''}  href="/contact">Contact</Link>
      </div>

      {/* <CallBtn className={"lg:block hidden"}>Schedule A Call</CallBtn> */}
<MainBtn  href={"https://wa.me/923377507229"} className={"bg-black lg:block hidden text-white"}>Contact Now</MainBtn>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          className="absolute  rotate-180 left-0 top-0 w-[35%] opacity-50 "
          src="/Images/rightEllipse.png"
          alt=""
        />
        <img
          className="absolute   right-0 bottom-0 w-[35%] opacity-50 "
          src="/Images/rightEllipse.png"
          alt=""
        />
        <div className="flex flex-col text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   ">
          <Link
            href="/"
            className="mb-4 md:text-3xl text-2xl"
            onClick={toggleMenu}
            
          >
            Home
          </Link>
          <Link
            href="/services"
            className="mb-4 md:text-3xl text-2xl"
            onClick={toggleMenu}
          >
            My Services
          </Link>
          <Link
            href="/work"
            className="mb-4 md:text-3xl text-2xl"
            onClick={toggleMenu}
          >
            My Work
          </Link>
          <Link
            href="/contact"
            className="mb-4 md:text-3xl text-2xl"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;

