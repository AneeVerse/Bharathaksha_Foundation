"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// components/Navbar.js
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
const menuList =[
    {
        name: "Home",
        url : "/"
    },
    {
        name: "About Us",
        url : "/home/about"
    }, 
    {
        name: "Ongoing Projects",
        url : "/home/ongoing-projects"
    }, 
    {
        name: "Get Involved",
        url : "/home/get-involved"
    },
    {
        name: "Contact Us",
        url : "/home/contact"
    },
]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  //
  return (
    <nav className=" bg-white h-[90px] border-b fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-[90px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href={"/"} className="flex items-center text-2xl">
            <div className="text-[#8ac240] font-bold">Bharataksha</div>
            <span className="ml-2  text-[#0e2f50] font-bold">Foundation</span>
          </Link>
<div className='flex gap-5 items-center'>
          {/* Menu for large screens */}
          <div className="hidden lg:flex space-x-6">
           {menuList.map((val, ind)=>{
            return(
                <Link key={ind} href={val.url} className={`hover:text-[#8ac240] font-semibold ${val.url === pathName ? " text-[#8ac240] ": " text-black"}`}>{val.name}</Link>
            )
           })}
          </div>

          {/* Buttons on the right */}
          <div className="hidden md:flex items-center">
            <Link href={"/know-yourself"} className="bg-[#8ac240] text-white px-4 py-2 rounded-lg hover:bg-[#426217]">
            Know Yourself
            </Link>
          </div>
</div>
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-black focus:outline-none focus:text-black">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`max-w-[300px] bg-white ${isOpen ? ' translate-x-0' : ' translate-x-[-100%] '} duration-300`}
      style={{height: "calc(100vh - 90px)"}}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuList.map((val, ind)=>{
            return(
                <Link  key={ind}  onClick={() => setIsOpen(!isOpen)}  href={val.url} className={`block duration-100 text-gray-900 hover:bg-gray-700 ${pathName === val.url ? " text-white bg-gray-700" : " "} hover:text-white px-3 py-2 rounded-md text-base font-medium`}>{val.name}</Link>
            )
           })}
          <div className="flex justify-between mt-2">
            
             <Link href={"know-yourself"} className="bg-[#8ac240] text-white px-6 py-2 rounded-full hover:bg-[#537b20]">
             Know Yourself
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
