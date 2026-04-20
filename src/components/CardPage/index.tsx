'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPageData = Pick<Page, 'slug' | 'title' | 'shortDescription'>

export const CardPage: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPageData
  relationTo?: 'pages'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, title, shortDescription } = doc || {}
  // const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  // const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${slug}`

  return (
    <article className="" ref={card.ref}>
      <div className="flex justify-center items-center w-full h-full p-4">
        <div className="relative group w-full max-w-md overflow-hidden rounded-lg aspect-square w-48 border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer">
          <Link className="not-prose" href={href} ref={link.ref}>
            {/* <img
              src="/path-to-your-image.jpg"
              alt="Hands holding"
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}
            <div className="relative group w-full max-w-md overflow-hidden rounded-lg aspect-square w-48 border border-border rounded-lg overflow-hidden bg-card"></div>
          </Link>

          <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-white">
            <h2 className="text-4xl mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out group-hover:scale-110">
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h2>

            <p className="text-xl font-medium mb-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {shortDescription}
            </p>

            {/* <button className="bg-[#B10D33] hover:bg-[#8e0a29] transition-colors text-white font-bold py-4 px-10 tracking-wide uppercase text-sm">
              Find Out More
            </button> */}
          </div>
        </div>
      </div>
    </article>
  )
}
