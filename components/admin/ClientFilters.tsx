'use client'

interface ClientFiltersProps {
  search: string
  status: string
  onSearchChange: (value: string) => void
  onStatusChange: (value: string) => void
  onPageChange: (page: number) => void
}

export default function ClientFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onPageChange,
}: ClientFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Поиск
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              onSearchChange(e.target.value)
              onPageChange(1)
            }}
            placeholder="ФИО, телефон, автомобиль..."
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Статус договора
          </label>
          <select
            value={status}
            onChange={(e) => {
              onStatusChange(e.target.value)
              onPageChange(1)
            }}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Все статусы</option>
            <option value="pending">Ожидает</option>
            <option value="active">Активен</option>
            <option value="expired">Истек</option>
            <option value="cancelled">Отменен</option>
          </select>
        </div>
      </div>
    </div>
  )
}
