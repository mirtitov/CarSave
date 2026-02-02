export default function ContactsPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Контакты
          </h1>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <a
                  href="tel:+78005053432"
                  className="text-primary-600 hover:text-primary-700 text-lg"
                >
                  +7 (800) 505 34 32
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Telegram</h3>
                <a
                  href="https://t.me/carsave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
            <p className="text-gray-600 mb-6">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
            <button className="btn-primary w-full">Оставить заявку</button>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Наши офисы</h2>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Карта будет здесь</p>
          </div>
        </div>
      </div>
    </div>
  )
}
