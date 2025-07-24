import { getTranslations } from 'next-intl/server'
import { EventCreationForm } from '@/app/[locale]/event/create/components'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'CreateEvent' })

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export default function EventCreatePage() {
  return <EventCreationForm />
}
