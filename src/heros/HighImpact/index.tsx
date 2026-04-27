'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="relative -mt-[10.4rem] min-h-[84vh] z-5 flex items-center justify-center text-white">
      <div className="container mt-auto mb-8 z-10 relative flex">
        <div className="fade-in-element">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
        </div>
      </div>
      <div className="absolute inset-0 select-none -z-10">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
