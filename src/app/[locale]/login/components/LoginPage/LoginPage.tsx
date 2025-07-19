import { LoginForm } from '../LoginForm/LoginForm'
import styles from './LoginPage.module.scss'

export const LoginPage: React.FC = () => {
  return (
    <div className={styles['page']}>
      <header className={styles['page__header']}>
        <p> Header </p>
      </header>
      <LoginForm />
      <footer className={styles['page__footer']}>
        <p> Footer </p>
      </footer>
    </div>
  )
}
