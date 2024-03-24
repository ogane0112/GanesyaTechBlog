"use client"
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import SmMenu from "@/app/components/SmMenu"
import NavLink from './NavLink';
const navLinks = [
  {
    title: "ホーム",
    path: "/",
  },
  {
    title: "機械学習",
    path: "/ai",
  },
  {
    title: "読書メモ",
    path: "/read",
  }, 
  {
    title: "お役立ちツール",
    path: "/tool",
  },
 
  {
    title: "アルゴリズム",
    path: "/algo",
  },
  {
    title: "情報セキュリティ",
    path: "/security",
  },
  {
    title: "工作",
    path: "/make",
  },
  {
    title: "プログラミング",
    path: "/program",
  },
];

function Header() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header >
      <Image src="/header.png" width={1440} height={250} alt="Picture of the author" priority={false} />
      <nav className="mx-auto border-[#33353F] top-0 left-0 right-0 z-10 bg-white md:border  ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
         
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" bg-black flex items-center px-3 py-2 border rounded border-black text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5"  />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-black  flex items-center px-3 py-2 border rounded border-black text-slate-200 hover:text-blue hover:border-white"
            >
              <XMarkIcon className="h-5 w-5 bg-black-100"  />
            </button>
          )}
        </div>
        <div className="menu hidden md:block w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">

            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <SmMenu links={navLinks} /> : null}
    </nav>
    </header>
  )
}

export default Header