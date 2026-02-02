import FAQ from '@/components/sections/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Часто задаваемые вопросы',
  description: 'Ответы на частые вопросы о программе защиты автомобилей CarSave. Гарантия, тарифы, условия подключения и использования.',
  openGraph: {
    title: 'FAQ CarSave - Ответы на вопросы',
    description: 'Ответы на частые вопросы о программе защиты автомобилей CarSave',
  },
}

export default function FAQPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <FAQ />
    </div>
  )
}
