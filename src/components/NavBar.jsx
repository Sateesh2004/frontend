"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


const NavBar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()
   
  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <svg 
                  className="h-8 w-8 text-blue-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12a1 1 0 11-2 0v-5a1 1 0 112 0v5zm-1-8a1 1 0 100-2 1 1 0 000 2z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-800">Career Compass</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link href="/" className={` hover:text-blue-600 ${pathname==="/"?"text-blue-600":"text-gray-700"} transition duration-300`}>Home</Link>
              <Link href="/about" className={` hover:text-blue-600 ${pathname==="/about"?"text-blue-600":"text-gray-700"} transition duration-300`}>About</Link>
              <Link href="/services" className={` hover:text-blue-600 ${pathname==="/services"?"text-blue-600":"text-gray-700"} transition duration-300`}>Services</Link>
              <Link href="/contact" className={` hover:text-blue-600 ${pathname==="/contact"?"text-blue-600":"text-gray-700"} transition duration-300`}>Contact</Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <button className='p-2 bg-blue-500 rounded-[50px] px-5 text-white hover:bg-blue-600'>Signup</button>
            </div>



        

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex sm:hidden items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="/" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default NavBar
