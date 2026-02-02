'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Client {
  id: string
  firstName: string
  lastName: string
  middleName?: string
  phone: string
  email?: string
  carBrand: string
  carModel: string
  carYear: number
  contractDate?: string
  contractStatus: string
  warrantyPrice?: number
  tariffPlan?: string
}

interface ClientListProps {
  search: string
  status: string
  page: number
  onPageChange: (page: number) => void
}

export default function ClientList({ search, status, page, onPageChange }: ClientListProps) {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    limit: 20,
  })

  useEffect(() => {
    fetchClients()
  }, [search, status, page])

  const fetchClients = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
      })
      if (search) params.append('search', search)
      if (status) params.append('status', status)

      const response = await fetch(`/api/clients?${params}`)
      const data = await response.json()
      setClients(data.clients || [])
      setPagination(data.pagination || { total: 0, totalPages: 0, limit: 20 })
    } catch (error) {
      console.error('Error fetching clients:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      active: 'bg-green-100 text-green-800',
      expired: 'bg-red-100 text-red-800',
      cancelled: 'bg-gray-100 text-gray-800',
    }
    const labels = {
      pending: 'Ожидает',
      active: 'Активен',
      expired: 'Истек',
      cancelled: 'Отменен',
    }
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          styles[status as keyof typeof styles] || styles.pending
        }`}
      >
        {labels[status as keyof typeof labels] || status}
      </span>
    )
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleDateString('ru-RU')
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Загрузка...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {clients.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          Клиенты не найдены
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Клиент
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Контакты
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Автомобиль
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Договор
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {client.lastName} {client.firstName}
                        {client.middleName && ` ${client.middleName}`}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{client.phone}</div>
                      {client.email && (
                        <div className="text-sm text-gray-500">{client.email}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {client.carBrand} {client.carModel}
                      </div>
                      <div className="text-sm text-gray-500">{client.carYear} год</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDate(client.contractDate)}
                      </div>
                      {client.warrantyPrice && (
                        <div className="text-sm text-gray-500">
                          {client.warrantyPrice.toLocaleString('ru-RU')} ₽
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(client.contractStatus)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/admin/clients/${client.id}`}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        Подробнее
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pagination.totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Показано {((page - 1) * pagination.limit) + 1} -{' '}
                {Math.min(page * pagination.limit, pagination.total)} из{' '}
                {pagination.total}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    if (page > 1) {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      onPageChange(page - 1)
                    }
                  }}
                  disabled={page === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Назад
                </button>
                <button
                  onClick={() => {
                    if (page < pagination.totalPages) {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      onPageChange(page + 1)
                    }
                  }}
                  disabled={page === pagination.totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Вперед
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
