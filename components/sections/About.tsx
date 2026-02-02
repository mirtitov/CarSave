export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Бесплатная эвакуация',
      description: 'Эвакуация всегда включена во все тарифы',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Личный сервис менеджер 24/7',
      description: 'Поддержка в любое время суток',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWZkZmUiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              О компании
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            CarSave — <span className="gradient-text">российская компания</span>, специализирующаяся на предоставлении гарантии и защиты автомобилей.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Мы обеспечиваем покрытие затрат на ремонт мотора, акпп, электрооборудования, 
            трансмиссии, тормозной системы. Сотрудничая с сетью аккредитованных сервисных 
            центров по всей стране. Наша миссия — снизить финансовые риски автовладельцев 
            и обеспечить предсказуемость расходов на содержание автомобиля.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0">
                  <div className="scale-110">{feature.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
                CarSave – не просто гарантия
              </h3>
              <p className="text-2xl md:text-3xl font-semibold opacity-95">Это комплекс защиты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
