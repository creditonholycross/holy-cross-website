import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'logoLight',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'nestedNavItems',
      type: 'array',
      fields: [
        {
            name: 'label',
            type: 'text',
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 20,
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/Header/RowLabel#RowLabel',
            },
          },
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
