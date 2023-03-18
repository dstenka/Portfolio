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
                Dominik Stenka
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <a href="/">Home</a>
                </li>
                <li className="p-4">
                    <a href="/projects">Projekte</a>
                </li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <AiOutlineMenu
                size={20}
                className="text-[#00df9a] md:hidden"
                onClick={handleNav}
            />
            <div
                className={
                    nav
                        ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'fixed left-[-100%] top-0 w-[100%] h-full border-none ease-in-out duration-1000 z-[9999999]'
                }
            >
                <div className="flex justify-between items-center h-24 px-4 text-[#00df9a]">
                    <h1 className="text-3xl font-bold">Dominik Stenka</h1>
                    <AiOutlineClose size={20} onClick={handleNav} />
                </div>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
