import { useTranslations } from 'next-intl'
import { HomePage } from '@/app/[locale]/components'

export default function Home() {
  const t = useTranslations('HomePage')

  return <HomePage />
}
