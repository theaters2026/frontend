import { RegisterForm } from '../RegisterForm/RegisterForm'
import { useTranslations } from 'next-intl'
import styles from './RegisterPage.module.scss'

export const RegisterPage: React.FC = () => {
  const t = useTranslations('Register')

  return (
    <div className={styles['page']}>
      <header className={styles['page__header']}>
        <p>{t('header')}</p>
      </header>
      <div className={styles['page__body']}>
        <RegisterForm />
      </div>
      <footer className={styles['page__footer']}>
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}
