import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Posters: CollectionConfig = {
    defaultPopulate: {
        title: true,
        poster: true,
        // meta: {
        //     image: true,
        //     description: true,
        // },
    },
    slug: 'posters',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'slug',
            type: 'text',
        },
        {
            name: 'poster',
            type: 'upload',
            relationTo: 'media',
        },
    ],
    folders: true,
      access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
      }
}