import type { Poster, PostersBlock as PostersBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionPosters } from '@/components/CollectionPosters'

export const PostersBlock: React.FC<
  PostersBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let posters: Poster[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosters = await payload.find({
      collection: 'posters',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posters = fetchedPosters.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosters = selectedDocs.map((poster) => {
        if (typeof poster.value === 'object') return poster.value
      }) as Poster[]

      posters = filteredSelectedPosters
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionPosters posters={posters} />
    </div>
  )
}
