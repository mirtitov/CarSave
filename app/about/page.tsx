import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О компании CarSave',
  description: 'CarSave - российская компания по защите автомобилей. Гарантия на ремонт двигателя, АКПП, электрооборудования. Сеть аккредитованных СТО по всей стране.',
  openGraph: {
    title: 'О компании CarSave',
    description: 'CarSave - российская компания по защите автомобилей',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            О компании CarSave
          </h1>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              CarSave — российская компания, специализирующаяся на предоставлении гарантии 
              и защиты автомобилей. Мы обеспечиваем покрытие затрат на ремонт мотора, АКПП, 
              электрооборудования, трансмиссии, тормозной системы.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Сотрудничая с сетью аккредитованных сервисных центров по всей стране, наша 
              миссия — снизить финансовые риски автовладельцев и обеспечить предсказуемость 
              расходов на содержание автомобиля.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Наши принципы</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Простота и прозрачность</strong> — мы исключили лишние бюрократические процедуры</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Качество</strong> — контроль качества работ в аккредитованных сервисах</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Доступность</strong> — поддержка 24/7 и бесплатная эвакуация</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Бесплатная диагностика</h3>
                <p className="text-gray-600 text-sm">
                  Полная диагностика автомобиля в аккредитованном СТО перед оформлением договора
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Быстрое оформление</h3>
                <p className="text-gray-600 text-sm">
                  Договор оформляется в течение 1 дня после диагностики
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Сеть партнеров</h3>
                <p className="text-gray-600 text-sm">
                  Аккредитованные сервисные центры по всей стране
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Контроль качества</h3>
                <p className="text-gray-600 text-sm">
                  Мы контролируем качество ремонтных работ в партнерских СТО
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
