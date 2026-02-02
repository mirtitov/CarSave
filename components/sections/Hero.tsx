'use client'

import { useState } from 'react'
import Link from 'next/link'
import RequestForm from '@/components/RequestForm'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50/30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWZkZmUiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                🛡️ Защита вашего автомобиля
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Защитите свой автомобиль от{' '}
              <span className="gradient-text">неожиданных поломок</span> уже сегодня
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              CarSave покрывает дорогостоящие ремонты и контролирует их качество, 
              пока вы занимаетесь важными делами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/tariffs"
                className="btn-primary text-lg px-8 py-4 text-center inline-flex items-center justify-center"
              >
                <span>Рассчитать стоимость</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button
                onClick={() => setShowForm(true)}
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Оставить заявку
              </button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Бесплатная диагностика</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative glass-effect rounded-3xl shadow-2xl p-8 md:p-12">
              {showForm ? (
                <RequestForm onClose={() => setShowForm(false)} />
              ) : (
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center shadow-xl animate-float">
                    <svg
                      className="w-20 h-20 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 gradient-text">Комплексная защита</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Полное покрытие расходов на ремонт ключевых узлов автомобиля
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-primary-50 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
                      <div className="text-sm text-gray-600">Покрытие ремонта</div>
                    </div>
                    <div className="p-4 bg-primary-50 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600 mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Поддержка</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
