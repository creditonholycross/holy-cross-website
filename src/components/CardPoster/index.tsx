'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Poster } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPosterData = Pick<Poster, 'title' | 'slug' | 'poster'>

export const CardPoster: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPosterData
  relationTo?: 'posters'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { title, poster } = doc || {}
  // const { description, image: metaImage } = meta || {}

  // const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  // const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = typeof poster !== 'number' && poster?.url || "";

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center p-4'>
          <div className="p-4">
            {titleToUse && (
              <div className="prose">
                <p>
                  <Link className="not-prose" href={href} ref={link.ref}>
                    {titleToUse}
                  </Link>
                </p>
              </div>
              )}
            {/* {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>} */}
          </div>
          <div className="relative w-full p-4">
          {!poster && <div className="">No image</div>}
          {poster && typeof poster !== 'number' && <Media resource={poster} size="33vw" />}
          </div>
      </div>
      
      
    </article>
  )
}
