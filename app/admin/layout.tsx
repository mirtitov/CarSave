'use client'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import AdminNav from '@/components/admin/AdminNav'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const router = useRouter()
  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    // Если не на странице логина и нет сессии, редиректим на логин
    if (!isLoginPage && status === 'unauthenticated') {
      router.push('/admin/login')
    }
    // Если на странице логина и есть сессия, редиректим на админ-панель
    if (isLoginPage && status === 'authenticated') {
      router.push('/admin')
    }
  }, [isLoginPage, status, router])

  // Показываем только children для страницы логина
  if (isLoginPage) {
    return <>{children}</>
  }

  // Показываем загрузку пока проверяется сессия
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Загрузка...</div>
      </div>
    )
  }

  // Если нет сессии и не на странице логина, не показываем ничего (редирект в процессе)
  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main className="pt-16">{children}</main>
    </div>
  )
}
