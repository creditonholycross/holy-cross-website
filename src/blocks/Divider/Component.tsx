import type { DividerBlock as DividerBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & DividerBlockProps

export const DividerBlock: React.FC<Props> = ({ className }) => {
  return <div className="container my-8 w-full border-b-3 border-red-800"></div>
}
