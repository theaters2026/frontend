import type { Metadata } from 'next'
import './globals.scss'
import localFont from 'next/font/local'

const spectral = localFont({
  src: [
    {
      path: '../../public/fonts/spectral/spectral-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/spectral/spectral-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-spectral',
  display: 'swap',
})

const onest = localFont({
  src: [
    {
      path: '../../public/fonts/onest/onest-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-onest',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Платформа независимых театров',
  description: 'Платформа независимых театров',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${spectral.variable} ${onest.variable}`}>
        {children}
      </body>
    </html>
  )
}
