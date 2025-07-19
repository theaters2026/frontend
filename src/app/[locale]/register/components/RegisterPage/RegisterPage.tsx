import { RegisterForm } from '../RegisterForm/RegisterForm'
import styles from './RegisterPage.module.scss'

export const RegisterPage: React.FC = () => {
  return (
    <div className={styles['page']}>
      <header className={styles['page__header']}>
        <p>Театральная платформа - Регистрация</p>
      </header>
      <div className={styles['page__body']}>
        <RegisterForm />
      </div>
      <footer className={styles['page__footer']}>
        <p>© 2025 Платформа независимых театров</p>
      </footer>
    </div>
  )
}
