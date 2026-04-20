import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TextImageBlock: Block = {
  slug: 'textImageBlock',
  interfaceName: 'TextImageBlock',
  fields: [
    {
      name: 'size',
      type: 'select',
      defaultValue: 'oneThird',
      options: [
        {
          label: 'One Third',
          value: 'oneThird',
        },
        {
          label: 'Half',
          value: 'half',
        },
        {
          label: 'Two Thirds',
          value: 'twoThirds',
        },
      ],
    },
    {
      name: 'imageAlignment',
      type: 'select',
      defaultValue: 'right',
      options: [
        {
          label: 'Right',
          value: 'right',
        },
        {
          label: 'Left',
          value: 'left',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
