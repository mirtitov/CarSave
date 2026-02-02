import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://carsavegarant.ru'),
  title: {
    default: 'CarSave - Защита автомобиля от неожиданных поломок',
    template: '%s | CarSave',
  },
  description: 'CarSave покрывает дорогостоящие ремонты и контролирует их качество. Российская компания, специализирующаяся на предоставлении гарантии и защиты автомобилей. Гарантия на двигатель, АКПП, электрооборудование, трансмиссию и тормозную систему.',
  keywords: ['гарантия автомобиля', 'защита автомобиля', 'ремонт автомобиля', 'CarSave', 'гарантия на авто', 'защита авто', 'ремонт двигателя', 'гарантия АКПП'],
  authors: [{ name: 'CarSave' }],
  creator: 'CarSave',
  publisher: 'CarSave',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://carsavegarant.ru',
    siteName: 'CarSave',
    title: 'CarSave - Защита автомобиля от неожиданных поломок',
    description: 'CarSave покрывает дорогостоящие ремонты и контролирует их качество. Гарантия на двигатель, АКПП, электрооборудование.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CarSave - Защита автомобиля',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarSave - Защита автомобиля от неожиданных поломок',
    description: 'CarSave покрывает дорогостоящие ремонты и контролирует их качество.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Добавьте коды верификации после регистрации в поисковых системах
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
