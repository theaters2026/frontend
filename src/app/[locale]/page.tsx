import { useTranslations } from 'next-intl'
import { LoginPage } from './components/Login/LoginPage'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <div>
      <h1>{t('title')}</h1>
      <LoginPage />
    </div>
  )
}
