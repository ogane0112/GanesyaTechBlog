import React from 'react'
import Image from 'next/image';
import NavLink from './NavLink';
const navLinks = [
  {
    title: "ホーム",
    path: `/`,
  },
  {
    title: "機械学習",
    path: `/list/機械学習`,
  },
  {
    title: "読書メモ",
    path: `/list/読書メモ`,
  }, 
  {
    title: "ツール",
    path: `/list/ツール`,
  },
 
  {
    title: "アルゴリズム",
    path: `/list/アルゴリズム`,
  },
  {
    title: "セキュリティ",
    path: `/list/セキュリティ`,
  },
  {
    title: "工作",
    path: `/list/工作`,
  },
  {
    title: "プログラミング",
    path: `/list/プログラミング`,
  },
  {
    title: "その他",
    path: `/list/その他`,
  },
];

function Header() {


  return (
    <header className='z-10' >
      <Image src="/header.png" width={1440} height={300} alt="Picture of the author" className ="mx-auto" priority={false} />
      <nav className="mx-auto border-[#33353F] top-0 left-0 right-0 z-10 bg-white md:border ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-center mx-auto px-auto">
         
      <div className="mobile-menu block md:hidden">
          <ul className="flex flex-wrap p-0 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="w-1/3">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
      </div>

      <div className="menu hidden md:block w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-xs ">

            {navLinks.map((link, index) => (
              <li key={index} className='text-center'>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header