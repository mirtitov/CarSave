'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Tariffs() {
  const tariffs = [
    {
      name: 'Старт',
      price: 'от 4 166 ₽',
      period: '/ мес.',
      description: 'Стоимость тарифа рассчитывается индивидуально',
      features: [
        'Двигатель',
        'АКПП',
        'Электрооборудование',
        'Трансмиссия',
        'Тормозная система',
      ],
    },
    {
      name: 'Стандарт',
      price: 'от 6 000 ₽',
      period: '/ мес.',
      description: 'Расширенное покрытие',
      features: [
        'Все из тарифа Старт',
        'Подвеска',
        'Рулевое управление',
        'Система охлаждения',
      ],
    },
    {
      name: 'Премиум',
      price: 'от 8 500 ₽',
      period: '/ мес.',
      description: 'Максимальная защита',
      features: [
        'Все из тарифа Стандарт',
        'Турбина',
        'Генератор',
        'Стартер',
        'Кондиционер',
      ],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWZkZmUiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Тарифы
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Наши <span className="gradient-text">тарифные программы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий тариф или рассчитайте стоимость индивидуально
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tariffs.map((tariff, index) => {
            const isPopular = index === 1; // Средний тариф - популярный
            return (
              <div
                key={index}
                className={`relative group ${isPopular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="px-4 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-bold rounded-full shadow-lg">
                      Популярный
                    </span>
                  </div>
                )}
                <div className={`card h-full flex flex-col ${isPopular ? 'border-4 border-primary-500 shadow-2xl scale-105' : 'border-2 border-gray-200'} hover:border-primary-500 transition-all duration-300`}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-extrabold mb-3 text-gray-900">{tariff.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-extrabold gradient-text">{tariff.price}</span>
                      <span className="text-gray-600 text-lg ml-2">{tariff.period}</span>
                    </div>
                    <p className="text-gray-600 text-lg">{tariff.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full ${isPopular ? 'btn-primary' : 'btn-outline'} text-lg py-4`}>
                    Выбрать тариф
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/tariffs" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group">
            <span>Подробнее о тарифах</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
