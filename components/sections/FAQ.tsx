'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Зачем мне CarSave, если есть КАСКО?',
      answer: 'CarSave – это программа, которая берет на себя расходы по ремонту ключевых узлов автомобиля (двигатель, АКПП, электрика, подвеска, тормоза).',
    },
    {
      question: 'Чем CarSave отличается от ОСАГО и КАСКО?',
      answer: 'ОСАГО покрывает ущерб другим, КАСКО – повреждения от ДТП, а CarSave – поломки автомобиля из-за износа или технических неисправностей.',
    },
    {
      question: 'Какие автомобили принимаются на гарантию?',
      answer: 'Машины не старше 10 лет и с пробегом до 200 000 км.',
    },
    {
      question: 'Что нужно для подключения гарантии?',
      answer: 'Приехать в наше партнерское СТО на бесплатную диагностику и заключить договор.',
    },
    {
      question: 'Нужно ли платить за диагностику?',
      answer: 'Нет, диагностика полностью бесплатна для клиентов CarSave.',
    },
    {
      question: 'Что делать, если машина сломалась?',
      answer: 'Позвоните в нашу службу поддержки или оставьте заявку на сайте — мы организуем эвакуацию и ремонт.',
    },
    {
      question: 'Входит ли эвакуатор в программу?',
      answer: 'Да, эвакуация всегда включена во все тарифы.',
    },
    {
      question: 'Какие поломки покрывает гарантия?',
      answer: 'Мы оплачиваем ремонт двигателя, коробки передач, электроники, подвески и тормозной системы.',
    },
    {
      question: 'Можно ли подключить CarSave, если у меня уже есть КАСКО?',
      answer: 'Да, программы не конфликтуют, а дополняют друг друга. CarSave покрывает то, чего нет в КАСКО.',
    },
    {
      question: 'Как быстро оформляется гарантия?',
      answer: 'После диагностики и проверки авто договор оформляется в течение 1 дня.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWZkZmUiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Полезная <span className="gradient-text">информация</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые частые вопросы о нашей программе защиты автомобилей
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-xl font-bold text-gray-900 pr-8 group-hover:text-primary-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 leading-relaxed text-lg animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
