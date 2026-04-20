import type { Block } from 'payload'
import { lexicalEditor, EXPERIMENTAL_TableFeature } from '@payloadcms/richtext-lexical'

export const Table: Block = {
  slug: 'table',
  interfaceName: 'TableBlock',
  fields: [
    {
      name: 'tableTitle',
      label: 'Table Title',
      type: 'text',
      required: false,
    },
    {
      name: 'tableDescription',
      label: 'Table Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          EXPERIMENTAL_TableFeature(), // Add this line
        ],
      }),
    },
    // {
    //   name: 'headers',
    //   label: 'Table Headers',
    //   type: 'array',
    //   minRows: 1,
    //   maxRows: 10,
    //   fields: [
    //     {
    //       name: 'header',
    //       type: 'text',
    //       required: true,
    //     },
    //     {
    //       name: 'width',
    //       label: 'Column Width',
    //       type: 'select',
    //       options: [
    //         { label: 'Auto', value: 'auto' },
    //         { label: 'Small (1fr)', value: '1fr' },
    //         { label: 'Medium (2fr)', value: '2fr' },
    //         { label: 'Large (3fr)', value: '3fr' },
    //       ],
    //       defaultValue: 'auto',
    //     },
    //   ],
    // },
    // {
    //   name: 'rows',
    //   label: 'Table Rows',
    //   type: 'array',
    //   minRows: 1,
    //   fields: [
    //     {
    //       name: 'cells',
    //       label: 'Row Cells',
    //       type: 'array',
    //       fields: [
    //         {
    //           name: 'richText',
    //           type: 'richText',
    //           required: false,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
}
