import type { Page, DiscoverBlock as DiscoverBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionDiscover } from '@/components/CollectionDiscover'

export const DiscoverBlock: React.FC<
  DiscoverBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, introContent, selectedDocs } = props

  const limit = 6

  let pages: Page[] = []

  if (selectedDocs?.length) {
    const filteredSelectedPages = selectedDocs.map((page) => {
      if (typeof page.value === 'object') return page.value
    }) as Page[]

    pages = filteredSelectedPages
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionDiscover pages={pages} />
    </div>
  )
}
