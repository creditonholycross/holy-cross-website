'use client'

import React from 'react'
import { useEffect, useState } from 'react'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Media } from '@/components/Media'
import { link } from 'fs'
import { cn } from '@/utilities/ui'
import { Logo } from '@/components/Logo/Logo'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const nestedNavItems = data?.nestedNavItems || []
  // const logo = data?.logo
  // const logoLight = data?.logoLight || data?.logo
  const [navLight, setNavLight] = useState(false)

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
    <header
      className={`fixed top-0 w-full z-50 shadow-sm bg-orange-50 font-sans text-slate-800 site-header-bar transition-all ${navLight ? 'site-header-bar-main' : ''}`}
    >
      <nav className="container mx-auto flex items-center justify-between py-0">
        <NavigationMenu.Root className="relative z-10 flex w-screen justify-center bg-orange-50">
          <div className="flex-1 m-3">
            <Link className="items-center" href="/">
              <div>
                <Logo className="max-w-[5.5rem]" />
              </div>
            </Link>
          </div>

          <NavigationMenu.List className="group flex list-none items-center justify-center p-1">
            {nestedNavItems.map(({ label, links }, i) => {
              return (
                <NavigationMenu.Item key={i}>
                  <NavigationMenu.Trigger className="group flex items-center justify-between gap-[2px] hidden md:block px-4 py-8 text-sm font-bold uppercase tracking-widest hover:text-red-800">
                    <div className="menu-trigger">
                      {label}
                      <svg
                        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                        fill="none"
                        viewBox="0 0 12 12"
                        stroke="currentColor"
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute top-0 left-0 w-full p-8 sm:w-auto">
                    <div className="">
                      <ul className="grid gap-8 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[calc(100vw-2rem)] md:w-[90vw] lg:w-[80vw] xl:max-w-[1200px] max-w-[1600px] transition-all duration-300">
                        {links?.map(({ link }, i) => {
                          return (
                            <li key={i}>
                              <NavigationMenu.Link asChild>
                                <div className="menu-item">
                                  <CMSLink
                                    className="text-xl font-sans hover:text-red-800"
                                    key={i}
                                    {...link}
                                  />
                                  <svg
                                    className="arrow text-red-800"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M6 12L10 8L6 4"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </NavigationMenu.Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              )
            })}
          </NavigationMenu.List>

          <div className="absolute left-0 top-full flex w-full justify-center">
            <NavigationMenu.Viewport className="NavigationMenuViewport border-b-4 border-red-800 relative z-11 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border-t bg-orange-50 shadow-xl transition-[width,height,transform] duration-300 w-[1200px]" />
          </div>

          <div className="flex-1" />
        </NavigationMenu.Root>
      </nav>
    </header>
  )
}
