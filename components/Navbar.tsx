"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Navbar: React.FC = () => {

    const path = usePathname();

    // Define a state variable to keep track of the active item
    const [active, setActive] = useState(path);

    // Function to handle click event on each item
    const handleClick = (itemName: string) => {
        setActive(itemName); // Set the active item
    };

    return (
        <div className="container mx-auto flex flex-col justify-between text-white h-full w-full">
            <div className="flex flex-grow items-center justify-center">
                <div className="text-3xl">Alex Janbo</div>
            </div>
            <div className="flex justify-center pb-4 space-x-4">
                {/* Use a function to dynamically assign classes based on the active state */}
                <Link href="/" onClick={() => handleClick('/')} className={`cursor-pointer ${active === '/' ? 'gradient_blue-purple rounded-md p-1' : ''}`}>Home</Link>
                <Link href="/projects" onClick={() => handleClick('/projects')} className={`cursor-pointer ${active === '/projects' ? 'gradient_blue-purple rounded-md p-1' : ''}`}>Projects</Link>
                <Link href="/resume" onClick={() => handleClick('/resume')} className={`cursor-pointer ${active === '/resume' ? 'gradient_blue-purple rounded-md p-1' : ''}`}>Resume</Link>
                <Link href="/contact" onClick={() => handleClick('/contact')} className={`cursor-pointer ${active === '/contact' ? 'gradient_blue-purple rounded-md p-1' : ''}`}>Contact me</Link>
            </div>
        </div>
    );
};

export default Navbar;