import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: 'CarSave - Защита автомобиля от неожиданных поломок',
  description: 'CarSave покрывает дорогостоящие ремонты и контролирует их качество. Российская компания, специализирующаяся на предоставлении гарантии и защиты автомобилей.',
  keywords: 'гарантия автомобиля, защита автомобиля, ремонт автомобиля, CarSave, гарантия на авто, защита авто',
  openGraph: {
    title: 'CarSave - Защита автомобиля от неожиданных поломок',
    description: 'CarSave покрывает дорогостоящие ремонты и контролирует их качество',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarSave - Защита автомобиля',
    description: 'CarSave покрывает дорогостоящие ремонты и контролирует их качество',
  },
}
