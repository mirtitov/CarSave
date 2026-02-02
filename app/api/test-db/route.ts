import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email: 'admin@carsave.ru' },
    })
    
    return Response.json({
      success: true,
      connected: true,
      admin: admin ? {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        passwordLength: admin.password.length,
        passwordStart: admin.password.substring(0, 30),
      } : null,
    })
  } catch (error: any) {
    return Response.json({
      success: false,
      connected: false,
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    }, { status: 500 })
  }
}
