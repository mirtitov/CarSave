'use client'

import { useState } from 'react'

interface RequestFormProps {
  onClose?: () => void
}

export default function RequestForm({ onClose }: RequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    agree: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Здесь будет отправка данных на сервер
    console.log('Form submitted:', formData)
    
    // Имитация отправки
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
      setFormData({ name: '', phone: '', message: '', agree: false })
      if (onClose) onClose()
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-extrabold mb-2 gradient-text">Оставить заявку</h3>
        <p className="text-gray-600">Заполните форму, и мы свяжемся с вами</p>
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Ваше имя *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-lg"
          placeholder="Введите ваше имя"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Ваш телефон *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-lg"
          placeholder="+7 (___) ___-__-__"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Подробно опишите ваш вопрос
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-lg resize-none"
          placeholder="Подробно опишите ваш вопрос"
        />
      </div>

      <div className="flex items-start bg-primary-50 p-4 rounded-xl">
        <input
          type="checkbox"
          id="agree"
          required
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="mt-1 mr-3 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
        <label htmlFor="agree" className="text-sm text-gray-700 leading-relaxed">
          Я согласен(на) на обработку персональных данных *
        </label>
      </div>

      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Отправка...
            </span>
          ) : (
            'Отправить заявку'
          )}
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary text-lg py-4 px-6"
          >
            Отмена
          </button>
        )}
      </div>
    </form>
  )
}
