'use client'

import { useState } from 'react'
import Link from 'next/link'
import ClientList from '@/components/admin/ClientList'
import ClientFilters from '@/components/admin/ClientFilters'

export default function AdminDashboard() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)

  return (
    <div className="section-container py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Клиенты</h1>
          <Link href="/admin/clients/new" className="btn-primary">
            + Добавить клиента
          </Link>
        </div>
        <ClientFilters
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onPageChange={setPage}
        />
      </div>
      <ClientList search={search} status={status} page={page} onPageChange={setPage} />
    </div>
  )
}
