'use client'

import { use, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ClientForm from '@/components/admin/ClientForm'
import Link from 'next/link'

export default function ClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [client, setClient] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClient()
  }, [id])

  const fetchClient = async () => {
    try {
      const response = await fetch(`/api/clients/${id}`)
      if (response.ok) {
        const data = await response.json()
        setClient(data)
      }
    } catch (error) {
      console.error('Error fetching client:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSuccess = () => {
    router.push('/admin')
  }

  const handleDelete = async () => {
    if (!confirm('Вы уверены, что хотите удалить этого клиента?')) {
      return
    }

    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        router.push('/admin')
      } else {
        alert('Ошибка при удалении клиента')
      }
    } catch (error) {
      console.error('Error deleting client:', error)
      alert('Ошибка при удалении клиента')
    }
  }

  if (loading) {
    return (
      <div className="section-container py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </div>
    )
  }

  if (!client) {
    return (
      <div className="section-container py-8">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Клиент не найден</p>
          <Link href="/admin" className="btn-primary">
            Вернуться к списку
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="section-container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Редактировать клиента
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Удалить
          </button>
          <Link href="/admin" className="btn-secondary">
            Отмена
          </Link>
        </div>
      </div>
      <ClientForm client={client} onSuccess={handleSuccess} />
    </div>
  )
}
