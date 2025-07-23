import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import styles from './EventErrorState.module.scss'

interface EventErrorStateProps {
  error?: string | null
  onBack: () => void
}

export const EventErrorState = ({ error, onBack }: EventErrorStateProps) => {
  const t = useTranslations('EventDetails')

  return (
    <div className={styles['error-state']}>
      <div className={styles['error']}>
        <h3>{error || t('notFound')}</h3>
      </div>
      <div className={styles['error__actions']}>
        <Button onClick={onBack} size="md">
          {t('back')}
        </Button>
      </div>
    </div>
  )
}
