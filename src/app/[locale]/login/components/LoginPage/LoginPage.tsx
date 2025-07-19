
import { LoginForm } from '../LoginForm/LoginForm'
import { useTranslations } from 'next-intl'
import styles from './LoginPage.module.scss'

export const LoginPage: React.FC = () => {
  const t = useTranslations('Login')

  return (
    <div className={styles['page']}>
      <header className={styles['page__header']}>
        <p>{t('header')}</p>
      </header>
      <LoginForm />
      <footer className={styles['page__footer']}>
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}