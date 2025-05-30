'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/news', label: 'News & Events' },
    { href: '/institute', label: 'Institute' },
    { href: '/studies', label: 'Studies' },
    { href: '/people', label: 'People' },
    { href: '/researchGroups', label: 'Research Groups' },
    { href: '/formerResearchGroups', label: 'Former Research Groups' },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
              pathname === href ? 'bg-gray-900' : 'hover:bg-gray-700'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;