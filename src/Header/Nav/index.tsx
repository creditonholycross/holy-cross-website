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
  const [navLight, setNavLight] = useState(false)

  console.log(data)

  return (
    <header
      className={`fixed top-0 w-full z-50 shadow-sm bg-white font-sans text-slate-800 site-header-bar transition-all ${navLight ? 'site-header-bar-main' : ''}`}
    >
      <div className="container mx-auto flex items-center justify-between py-0">
        <div className="relative z-10 flex w-full justify-center bg-white">
          <div className="flex-1 m-3">
            <Link className="items-center" href="/">
              <div>
                <Logo className="max-w-[5.5rem]" />
              </div>
            </Link>
          </div>

          <NavigationMenu.Root className="relative z-10 flex justify-center bg-white">
            <nav className="container mx-auto flex items-center justify-between py-0">
              <NavigationMenu.List className="group flex list-none items-center justify-center p-1">
                {nestedNavItems.map(({ label, links }, i) => {
                  return (
                    <NavigationMenu.Item key={i} className="relative">
                      <NavigationMenu.Trigger className="group flex items-center gap-[2px] hidden md:block px-2 py-8 text-sm font-bold uppercase tracking-widest hover:text-red-800">
                        <div className="menu-trigger">
                          {label}
                          <svg
                            className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
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
                      <NavigationMenu.Content className="NavigationMenuContent absolute top-full left-1/2 mt-0 z-50 w-max border-b-4 border-red-800 bg-white shadow-xl transition-all">
                        <ul
                          className={`shadow-xl border border-gray-100 rounded-lg min-w-[200px] pl-3 pr-8 gap-x-2 ${
                            links && links.length > 12
                              ? 'columns-3'
                              : links && links.length > 6
                                ? 'columns-2'
                                : 'columns-1'
                          } `}
                        >
                          {links?.map(({ link }, i) => {
                            return (
                              <li key={i} className="py-2 break-inside-avoid">
                                <NavigationMenu.Link asChild>
                                  <div className="menu-item p-3">
                                    <CMSLink
                                      className="text-xl font-sans hover:text-red-800"
                                      key={i}
                                      {...link}
                                    />
                                    <svg
                                      className="arrow text-red-800 mt-1 ml-1"
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
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  )
                })}
                {navItems.map(({ link }, i) => {
                  return (
                    <NavigationMenu.Item key={i} className="relative">
                      <NavigationMenu.Link asChild>
                        <div className="menu-item p-3">
                          <CMSLink
                            className="text-base font-sans hover:text-red-800 font-bold uppercase tracking-widest"
                            key={i}
                            {...link}
                          />
                          <svg
                            className="arrow text-red-800 ml-1"
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
                    </NavigationMenu.Item>
                  )
                })}
              </NavigationMenu.List>
            </nav>
          </NavigationMenu.Root>
          <div className="flex-1" />
        </div>
      </div>
    </header>
  )
}
