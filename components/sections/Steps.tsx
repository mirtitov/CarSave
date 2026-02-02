export default function Steps() {
  const steps = [
    {
      number: '1',
      title: 'Заявка и консультация',
      description: 'Вы оставляете заявку на сайте или по телефону. Мы подбираем оптимальный тариф и отвечаем на все вопросы.',
    },
    {
      number: '2',
      title: 'Диагностика автомобиля',
      description: 'Вы приезжаете в аккредитованное СТО CarSave, где проводится полная диагностика транспортного средства',
    },
    {
      number: '3',
      title: 'Заключение договора',
      description: 'После диагностики мы оформляем договор, фиксируем перечень покрываемых узлов и приступаем к исполнению гарантийных обязательств',
    },
    {
      number: '4',
      title: 'Защита и помощь при поломке',
      description: 'В случае неисправности вы звоните нам — мы организуем эвакуацию, ремонт и контролируем качество работ в аккредитованном сервисе',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/30"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Как это работает
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            4 шага к <span className="gradient-text">защите автомобиля</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="card hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 z-10">
                    <svg className="w-8 h-8 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              CarSave построен на принципе <strong className="text-gray-900">простоты и прозрачности</strong>. Мы исключили лишние 
              бюрократические процедуры, чтобы вы могли оформить защиту автомобиля и 
              воспользоваться услугой в любой момент, когда это необходимо.
            </p>
          </div>
          <button className="btn-primary text-lg px-10 py-5">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  )
}
