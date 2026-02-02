'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ClientFormProps {
  client?: any
  onSuccess?: () => void
}

export default function ClientForm({ client, onSuccess }: ClientFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
    email: '',
    carBrand: '',
    carModel: '',
    carYear: new Date().getFullYear(),
    carMileage: '',
    carVin: '',
    carNumber: '',
    contractDate: '',
    contractNumber: '',
    contractStatus: 'pending',
    warrantyPrice: '',
    tariffPlan: '',
    notes: '',
  })

  useEffect(() => {
    if (client) {
      setFormData({
        firstName: client.firstName || '',
        lastName: client.lastName || '',
        middleName: client.middleName || '',
        phone: client.phone || '',
        email: client.email || '',
        carBrand: client.carBrand || '',
        carModel: client.carModel || '',
        carYear: client.carYear || new Date().getFullYear(),
        carMileage: client.carMileage?.toString() || '',
        carVin: client.carVin || '',
        carNumber: client.carNumber || '',
        contractDate: client.contractDate
          ? new Date(client.contractDate).toISOString().split('T')[0]
          : '',
        contractNumber: client.contractNumber || '',
        contractStatus: client.contractStatus || 'pending',
        warrantyPrice: client.warrantyPrice?.toString() || '',
        tariffPlan: client.tariffPlan || '',
        notes: client.notes || '',
      })
    }
  }, [client])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = {
        ...formData,
        carYear: parseInt(formData.carYear.toString()),
        carMileage: formData.carMileage
          ? parseInt(formData.carMileage)
          : undefined,
        warrantyPrice: formData.warrantyPrice
          ? parseFloat(formData.warrantyPrice)
          : undefined,
        contractDate: formData.contractDate || undefined,
        email: formData.email || undefined,
        middleName: formData.middleName || undefined,
        carVin: formData.carVin || undefined,
        carNumber: formData.carNumber || undefined,
        contractNumber: formData.contractNumber || undefined,
        tariffPlan: formData.tariffPlan || undefined,
        notes: formData.notes || undefined,
      }

      const url = client ? `/api/clients/${client.id}` : '/api/clients'
      const method = client ? 'PATCH' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Ошибка при сохранении')
      }

      if (onSuccess) {
        onSuccess()
      } else {
        router.push('/admin')
      }
    } catch (err: any) {
      setError(err.message || 'Произошла ошибка при сохранении')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Личная информация */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Личная информация</h2>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Фамилия *
          </label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Имя *
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Отчество
          </label>
          <input
            type="text"
            value={formData.middleName}
            onChange={(e) =>
              setFormData({ ...formData, middleName: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Телефон *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="+7 (___) ___-__-__"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Информация об автомобиле */}
        <div className="md:col-span-2 mt-4">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Автомобиль</h2>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Марка *
          </label>
          <input
            type="text"
            required
            value={formData.carBrand}
            onChange={(e) =>
              setFormData({ ...formData, carBrand: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Модель *
          </label>
          <input
            type="text"
            required
            value={formData.carModel}
            onChange={(e) =>
              setFormData({ ...formData, carModel: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Год выпуска *
          </label>
          <input
            type="number"
            required
            min="1900"
            max={new Date().getFullYear() + 1}
            value={formData.carYear}
            onChange={(e) =>
              setFormData({ ...formData, carYear: parseInt(e.target.value) })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Пробег (км)
          </label>
          <input
            type="number"
            value={formData.carMileage}
            onChange={(e) =>
              setFormData({ ...formData, carMileage: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            VIN
          </label>
          <input
            type="text"
            value={formData.carVin}
            onChange={(e) =>
              setFormData({ ...formData, carVin: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Гос. номер
          </label>
          <input
            type="text"
            value={formData.carNumber}
            onChange={(e) =>
              setFormData({ ...formData, carNumber: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Информация о договоре */}
        <div className="md:col-span-2 mt-4">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Договор</h2>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Дата заключения
          </label>
          <input
            type="date"
            value={formData.contractDate}
            onChange={(e) =>
              setFormData({ ...formData, contractDate: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Номер договора
          </label>
          <input
            type="text"
            value={formData.contractNumber}
            onChange={(e) =>
              setFormData({ ...formData, contractNumber: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Статус договора *
          </label>
          <select
            required
            value={formData.contractStatus}
            onChange={(e) =>
              setFormData({ ...formData, contractStatus: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="pending">Ожидает</option>
            <option value="active">Активен</option>
            <option value="expired">Истек</option>
            <option value="cancelled">Отменен</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Стоимость гарантии (₽)
          </label>
          <input
            type="number"
            step="0.01"
            value={formData.warrantyPrice}
            onChange={(e) =>
              setFormData({ ...formData, warrantyPrice: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Тарифный план
          </label>
          <select
            value={formData.tariffPlan}
            onChange={(e) =>
              setFormData({ ...formData, tariffPlan: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Не выбран</option>
            <option value="Старт">Старт</option>
            <option value="Стандарт">Стандарт</option>
            <option value="Премиум">Премиум</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Примечания
          </label>
          <textarea
            rows={4}
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.push('/admin')}
          className="btn-secondary"
        >
          Отмена
        </button>
        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? 'Сохранение...' : client ? 'Сохранить изменения' : 'Создать клиента'}
        </button>
      </div>
    </form>
  )
}
