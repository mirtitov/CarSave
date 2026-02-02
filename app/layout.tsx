import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CarSave - Защита автомобиля от неожиданных поломок',
  description: 'CarSave покрывает дорогостоящие ремонты и контролирует их качество. Российская компания, специализирующаяся на предоставлении гарантии и защиты автомобилей.',
  keywords: 'гарантия автомобиля, защита автомобиля, ремонт автомобиля, CarSave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
