import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { TextImageBlock as TextImageBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'

export const TextImageBlock: React.FC<TextImageBlockProps> = (props) => {
  const { media, richText, size, imageAlignment } = props

  const colsSpanClasses = {
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        <div
          className={cn(
            `col-span-4 lg:col-span-${colsSpanClasses[size!]} md:col-span-2 flex flex-col justify-center items-center ${imageAlignment == 'right' ? 'lg:order-1' : 'lg:order-2'}`,
          )}
        >
          {richText && <RichText data={richText} enableGutter={false} />}
        </div>
        <div
          className={cn(
            `col-span-4 lg:col-span-${12 - +colsSpanClasses[size!]} md:col-span-2 ${imageAlignment == 'right' ? 'lg:order-2' : 'lg:order-1'}`,
          )}
        >
          <div className="flex justify-center items-center w-full h-full p-4">
            <div className="relative aspect-square w-82 overflow-hidden rounded-lg">
              {media && (
                <Media
                  imgClassName={cn(
                    'absolute inset-0 w-full h-full object-cover border border-border rounded-[0.8rem]',
                  )}
                  resource={media}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
