'use client'

import React from 'react'
import { useEffect, useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Media } from '@/components/Media'

// export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
//   const navItems = data?.navItems || []

//   return (
//     <nav className="flex gap-3 items-center">
//       {navItems.map(({ link }, i) => {
//         return <CMSLink key={i} {...link} appearance="link" />
//       })}
//       <Link href="/search">
//         <span className="sr-only">Search</span>
//         <SearchIcon className="w-5 text-primary" />
//       </Link>
//     </nav>
//   )
// }

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || [];
  const logo = data?.logo;
  const logoLight = data?.logoLight || data?.logo;
  const [navLight, setNavLight] = useState(false);
  
  // useEffect(() => {
  //   const section = document.querySelector("#hero")

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setNavLight(!entry.isIntersecting);
  //     },
  //     { threshold: 0.1}
  //   );

  //   if (section) observer.observe(section);

  //   return () => observer.disconnect();
  // })

  return (
    <header className={`fixed top-0 w-full z-50 shadow-sm font-sans text-slate-800 site-header-bar transition-all ${navLight ? 'site-header-bar-main' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex-shrink-0">
          <Link href="/">
            <div className='max-w-[4rem] w-full top-0 transition-all'>
              {logo && typeof logo === 'object' && (
                  <Media resource={navLight ? logoLight : logo} />)}
            </div>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[15px] font-semibold uppercase tracking-wider">
        {navItems.map(({ link }, i) => {
        return <li key={i}><CMSLink className={`hover:border-b-2 ${navLight ? 'border-b-white' : 'border-b-black'} pb-1`} key={i} {...link} appearance="inline" /></li>
        })}
        </ul>
        {/* <Link href="/search">
          <span className="sr-only">Search</span>
          <SearchIcon className={`w-5 transition-all  ${navLight ? 'text-primary' : 'text-secondary'}`} />
        </Link> */}

        {/* MOBILE MENU ICON (Simplified) */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

    </header>
  )
}
