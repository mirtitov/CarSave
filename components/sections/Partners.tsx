export default function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Партнеры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CarSave объединяет лучших игроков рынка: аккредитованные СТО и компании-партнёры, 
            разделяющие наши стандарты качества и надёжности.
          </p>
        </div>

        <div className="bg-white rounded-xl p-12 text-center">
          <p className="text-gray-600 mb-6">
            Автосервисы в Москве
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-24 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400">Логотип партнера {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
