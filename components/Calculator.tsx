'use client'

import { useState } from 'react'

interface CalculatorData {
  clientType: 'individual' | 'corporate' | null
  brand: string
  model: string
  year: string
  mileage: string
  usage: 'personal' | 'work' | 'corporate' | null
  priority: 'price' | 'protection' | 'balance' | null
  name: string
  phone: string
}

export default function Calculator() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<CalculatorData>({
    clientType: null,
    brand: '',
    model: '',
    year: '',
    mileage: '',
    usage: null,
    priority: null,
    name: '',
    phone: '',
  })

  const brands = ['Toyota', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai', 'Kia', 'Lada', 'Skoda', 'Nissan']
  const years = Array.from({ length: 15 }, (_, i) => (2024 - i).toString())
  const mileageOptions = [
    'До 50 000 км',
    '50 000 – 100 000 км',
    '100 000 – 150 000 км',
    '150 000 – 200 000 км',
    'Более 200 000 км',
  ]

  const handleNext = () => {
    if (step < 7) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    // Здесь будет отправка данных
    console.log('Calculator data:', data)
    alert('Спасибо! Мы рассчитаем стоимость и свяжемся с вами.')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Калькулятор стоимости</h2>
          <span className="text-gray-500">Шаг {step} из 7</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 7) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Для кого вы хотите оформить гарантию?</h3>
          <div className="space-y-3">
            <button
              onClick={() => {
                setData({ ...data, clientType: 'individual' })
                setTimeout(handleNext, 300)
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors text-left"
            >
              Для себя (физ. лицо)
            </button>
            <button
              onClick={() => {
                setData({ ...data, clientType: 'corporate' })
                setTimeout(handleNext, 300)
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors text-left"
            >
              Для компании (корпоративный автопарк)
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Марка автомобиля</h3>
          <select
            value={data.brand}
            onChange={(e) => setData({ ...data, brand: e.target.value })}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-600"
          >
            <option value="">Выберите марку</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <button
            onClick={handleNext}
            disabled={!data.brand}
            className="mt-4 btn-primary w-full disabled:opacity-50"
          >
            Далее
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Модель автомобиля</h3>
          <input
            type="text"
            value={data.model}
            onChange={(e) => setData({ ...data, model: e.target.value })}
            placeholder="Введите модель"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-600"
          />
          <button
            onClick={handleNext}
            disabled={!data.model}
            className="mt-4 btn-primary w-full disabled:opacity-50"
          >
            Далее
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Год выпуска</h3>
          <select
            value={data.year}
            onChange={(e) => setData({ ...data, year: e.target.value })}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-600"
          >
            <option value="">Выберите год</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button
            onClick={handleNext}
            disabled={!data.year}
            className="mt-4 btn-primary w-full disabled:opacity-50"
          >
            Далее
          </button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Пробег автомобиля</h3>
          <div className="space-y-3">
            {mileageOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setData({ ...data, mileage: option })
                  setTimeout(handleNext, 300)
                }}
                className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 6 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Как вы используете авто?</h3>
          <div className="space-y-3">
            <button
              onClick={() => {
                setData({ ...data, usage: 'personal' })
                setTimeout(handleNext, 300)
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors text-left"
            >
              Личные поездки
            </button>
            <button
              onClick={() => {
                setData({ ...data, usage: 'work' })
                setTimeout(handleNext, 300)
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors text-left"
            >
              Работа (доставка, такси)
            </button>
            <button
              onClick={() => {
                setData({ ...data, usage: 'corporate' })
                setTimeout(handleNext, 300)
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-colors text-left"
            >
              Корпоративный парк
            </button>
          </div>
        </div>
      )}

      {step === 7 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Что для вас важнее всего?</h3>
          <div className="space-y-3 mb-6">
            <button
              onClick={() => setData({ ...data, priority: 'price' })}
              className={`w-full p-4 border-2 rounded-lg transition-colors text-left ${
                data.priority === 'price'
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-600'
              }`}
            >
              Минимальная цена
            </button>
            <button
              onClick={() => setData({ ...data, priority: 'protection' })}
              className={`w-full p-4 border-2 rounded-lg transition-colors text-left ${
                data.priority === 'protection'
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-600'
              }`}
            >
              Максимальная защита
            </button>
            <button
              onClick={() => setData({ ...data, priority: 'balance' })}
              className={`w-full p-4 border-2 rounded-lg transition-colors text-left ${
                data.priority === 'balance'
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-600'
              }`}
            >
              Баланс цена / защита
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Ваше имя *</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Ваш телефон *</label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-600"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={handleBack} className="btn-secondary flex-1">
              Назад
            </button>
            <button
              onClick={handleSubmit}
              disabled={!data.name || !data.phone || !data.priority}
              className="btn-primary flex-1 disabled:opacity-50"
            >
              Узнать результат
            </button>
          </div>
        </div>
      )}

      {step > 1 && step < 7 && (
        <div className="mt-6 flex gap-4">
          <button onClick={handleBack} className="btn-secondary flex-1">
            Назад
          </button>
        </div>
      )}
    </div>
  )
}
