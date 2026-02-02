'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/admin" className="text-xl font-extrabold gradient-text">
              CarSave Admin
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/admin"
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname === '/admin'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Клиенты
              </Link>
              <Link
                href="/admin/clients/new"
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  pathname === '/admin/clients/new'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Добавить клиента
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 text-sm"
              target="_blank"
            >
              Сайт
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="btn-secondary text-sm py-2 px-4"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
