import type { Metadata } from 'next'
import './globals.scss'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { ReduxProvider } from '@/app/ReduxProvider'

const spectral = localFont({
  src: [
    {
      path: '../../public/fonts/spectral/spectral-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-spectral',
  display: 'swap',
})

const spectralSemiBold = localFont({
  src: [
    {
      path: '../../public/fonts/spectral/spectral-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-spectral-semibold',
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
      <body
        className={`${spectral.variable} ${spectralSemiBold.variable} ${onest.variable}`}
      >
        <ReduxProvider children={children} />
      </body>
    </html>
  )
}
