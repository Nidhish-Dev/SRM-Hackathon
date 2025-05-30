'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: '/news', label: 'News & Events' },
    { href: '/institute', label: 'The Institute' },
    { href: '/studies', label: 'Studies' },
    { href: '/people', label: 'People' },
    { href: '/researchGroups', label: 'Research Groups' },
    { href: '/formerResearchGroups', label: 'Former Research Groups' },
  ];

  return (
    <nav className="bg-white py-4 md:py-12 px-20 shadow-sm">
      <div className="container mx-auto items-center justify-between">
        {/* Logo and Subtitle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className=" text-3xl md:text-5xl font-bold text-black tracking-tight">
              SRM
            </Link>
            <span className="text-xl px-40 font-normal text-[#222222] hidden md:block">
              SRM Institute of Science and Technology
            </span>
          </div>

          {/* Hamburger Icon (visible on mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <div className="space-y-2">
                <span
                  className={`block w-8 h-1 bg-black transform transition duration-300 ${
                    isOpen ? 'rotate-45 translate-y-3' : ''
                  }`}
                ></span>
                <span
                  className={`block w-8 h-1 bg-black transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block w-8 h-1 bg-black transform transition duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-3' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation Links and Search Icon (Desktop) */}
        <div className="hidden md:flex justify-between mt-10 items-center">
          <div className="flex space-x-10">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[#222222] text-md font-light ${
                  pathname === href ? 'font-bold underline' : 'hover:underline'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <div>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu (Full Screen) */}
        <div
          className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transform transition-transform duration-300 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-12 right-20 focus:outline-none"
          >
            <div className="space-y-2">
              <span
                className={`block w-8 h-1 bg-black transform transition duration-300 ${
                  isOpen ? 'rotate-45 translate-y-3' : ''
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-black transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-black transform transition duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-3' : ''
                }`}
              ></span>
            </div>
          </button>

          <div className="flex flex-col items-center space-y-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={toggleMenu}
                className={`text-[#222222] text-xl font-light ${
                  pathname === href ? 'font-bold underline' : 'hover:underline'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;