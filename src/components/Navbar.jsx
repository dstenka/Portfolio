import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                <a href="/">Dominik Stenka</a>
            </h1>
            <ul className="hidden md:flex w-full">
                <li className="p-4">
                    <a href="/">Home</a>
                </li>
                <li className="p-4">
                    <a href="/my_projects">Eigene Projekte</a>
                </li>
                <li className="p-4">
                    <a href="/refrences">Referenzen</a>
                </li>
                <li className="p-4">
                    <a href="/about_me">Über mich</a>
                </li>
                <li className="p-4">
                    <a href="/contact">Kontakt</a>
                </li>
            </ul>
            <AiOutlineMenu
                size={20}
                className="text-[#00df9a] md:hidden"
                onClick={handleNav}
            />
            <div
                className={
                    nav
                        ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10'
                        : 'fixed left-[-100%] top-0 w-[100%] h-full border-none ease-in-out duration-1000 z-10'
                }
            >
                <div className="flex justify-between items-center h-24 px-4 text-[#00df9a]">
                    <h1 className="text-3xl font-bold">Dominik Stenka</h1>
                    <AiOutlineClose size={20} onClick={handleNav} />
                </div>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">
                        <a href="/">Home</a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="/my_projects">Eigene Projekte</a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="/refrences">Referenzen</a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="/about_me">Über mich</a>
                    </li>
                    <li className="p-4">
                        <a href="/contact">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
