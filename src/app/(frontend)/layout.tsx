import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export const inDevEnvironment = !!process && process.env.NODE_ENV === 'development'

const doveTypesFont = localFont({
  src: './fonts/DovesType-Text.otf',
  variable: '--font-dove-types',
})

const eBGarmondFont = localFont({
  src: [
    {
      path: './fonts/EBGaramond-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/EBGaramond-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/EBGaramond-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(
        process.env.NODE_ENV === 'development' ? eBGarmondFont.className : eBGarmondFont.className,
      )}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
}
