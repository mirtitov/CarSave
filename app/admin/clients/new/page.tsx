'use client'

import { useRouter } from 'next/navigation'
import ClientForm from '@/components/admin/ClientForm'

export default function NewClientPage() {
  const router = useRouter()

  const handleSuccess = () => {
    router.push('/admin')
  }

  return (
    <div className="section-container py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Добавить нового клиента
      </h1>
      <ClientForm onSuccess={handleSuccess} />
    </div>
  )
}
