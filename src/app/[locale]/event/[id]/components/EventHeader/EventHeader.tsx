'use client'

import { useTranslations } from 'next-intl'
import { useNavigation, useSearch } from '@/shared/hooks'
import styles from './EventHeader.module.scss'
import Image from 'next/image'

interface HeaderProps {
  className?: string
}

export const EventHeader = ({ className }: HeaderProps) => {
  const t = useTranslations('EventHeader')
  const { navigateToHome } = useNavigation()
  const { searchQuery, setSearchQuery, handleSearchSubmit } = useSearch()

  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={navigateToHome}>
          <Image src="/icons/logo.svg" alt="Logo" width={128} height={40} />
          <span className={styles.logo__text}>{t('title')}</span>
        </div>

        <form className={styles.search} onSubmit={handleSearchSubmit}>
          <div className={styles.search__wrapper}>
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.search__input}
            />
          </div>
        </form>
      </div>
    </header>
  )
}
