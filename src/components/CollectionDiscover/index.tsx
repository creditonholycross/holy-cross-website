import { cn } from '@/utilities/ui'
import React from 'react'

import { CardPage, CardPageData } from '@/components/CardPage'

export type Props = {
  pages: CardPageData[]
}

export const CollectionDiscover: React.FC<Props> = (props) => {
  const { pages } = props
  console.log(pages.length)

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {pages?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-3" key={index}>
                  <CardPage className="h-full" doc={result} relationTo="pages" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
