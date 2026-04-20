import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { TableBlock as TableBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'

export const TableBlock: React.FC<TableBlockProps> = (props) => {
  const { tableTitle, tableDescription, content } = props

  return (
    <div className="container my-16">
      {content && <RichText data={content} enableGutter={false} />}
      {/* <div className="rich-text">
        <table className="lexical-table">
          <thead>
            <tr>
              <th className="lexical-table-cell-header">Header 1</th>
              <th className="lexical-table-cell-header">Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="lexical-table-cell">Data A1</td>
              <td className="lexical-table-cell">Data A2</td>
            </tr>
            <tr>
              <td className="lexical-table-cell">Data B1</td>
              <td className="lexical-table-cell">Data B2</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  )
}
