import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Разрешаем доступ к странице логина без проверки
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }

  // Для остальных админ-страниц проверка будет в layout
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
