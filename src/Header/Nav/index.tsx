'use client'

import React from 'react'
import { useEffect, useState } from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu';


import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Media } from '@/components/Media'
import { link } from 'fs'
import { cn } from '@/utilities/ui'


export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || [];
  const nestedNavItems = data?.nestedNavItems || [];
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
      <nav className="container mx-auto flex items-center justify-between py-0">

        <NavigationMenu.Root className="relative z-10 flex w-screen justify-center border-b bg-white">

          <div className="flex-1 m-3">
            <Link href="/">
              <div className='max-w-[4rem]'>
                {logo && typeof logo === 'object' && (
                    <Media resource={navLight ? logoLight : logo} />)}
              </div>
            </Link>
          </div>

          <NavigationMenu.List className="group flex list-none items-center justify-center p-1">

            {nestedNavItems.map(({ label, links }, i) => {
                return <NavigationMenu.Item key={i}>
                    <NavigationMenu.Trigger className="group flex items-center justify-between gap-[2px] hidden md:block px-4 py-8 text-sm font-bold uppercase tracking-widest hover:text-blue-700">
                      {label}
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                      <div className="">
                        <ul className="grid gap-8 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[calc(100vw-2rem)] md:w-[90vw] lg:w-[80vw] xl:max-w-[1200px] max-w-[1600px] transition-all duration-300">
                          {links?.map(({link}, i) => {
                          return <li className="hover:underline" key={i}> 
                              <NavigationMenu.Link asChild>
                                <CMSLink className='text-lg font-bold' key={i} {...link} />
                              </NavigationMenu.Link>
                          </li>
                          })}
                        </ul>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                })}

          </NavigationMenu.List>

          <div className="absolute left-0 top-full flex w-full justify-center">
            <NavigationMenu.Viewport className="NavigationMenuViewport relative z-11 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border-t bg-white shadow-xl transition-[width,height,transform] duration-300 w-[1200px]" />
          </div>

          <div className="flex-1" />

        </NavigationMenu.Root>
      </nav>
    </header>
  )
}
