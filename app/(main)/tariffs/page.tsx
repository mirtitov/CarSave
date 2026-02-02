import Calculator from '@/components/Calculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Тарифы',
  description: 'Выберите подходящий тариф защиты автомобиля. Старт, Стандарт или Премиум - рассчитайте стоимость онлайн. Гарантия на двигатель, АКПП, электрооборудование.',
  openGraph: {
    title: 'Тарифы CarSave - Выберите защиту для вашего автомобиля',
    description: 'Выберите подходящий тариф защиты автомобиля. Рассчитайте стоимость онлайн.',
  },
}

export default function TariffsPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Тарифные программы CarSave
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий тариф или рассчитайте стоимость индивидуально
          </p>
        </div>

        <Calculator />
      </div>
    </div>
  )
}
