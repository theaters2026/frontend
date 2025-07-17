import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/shared/i18n/routing'
import type { Metadata } from 'next'
import '@/shared/styles/globals.scss'
import localFont from 'next/font/local'
import { ReduxProvider } from '@/core/providers'

const spectral = localFont({
  src: [
    {
      path: '../../../public/fonts/spectral/spectral-bold.woff2',
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
      path: '../../../public/fonts/spectral/spectral-semibold.woff2',
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
      path: '../../../public/fonts/onest/onest-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-onest',
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === 'en'
      ? 'Platform of independent theatres'
      : 'Платформа независимых театров'
  const description =
    locale === 'en'
      ? 'Platform of independent theatres'
      : 'Платформа независимых театров'

  return {
    title,
    description,
  }
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={`${spectral.variable} ${spectralSemiBold.variable} ${onest.variable}`}
      >
        <NextIntlClientProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
