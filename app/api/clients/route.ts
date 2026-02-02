import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const clientSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  middleName: z.string().optional(),
  phone: z.string().min(10),
  email: z.string().email().optional(),
  carBrand: z.string().min(1),
  carModel: z.string().min(1),
  carYear: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  carMileage: z.number().int().positive().optional(),
  carVin: z.string().optional(),
  carNumber: z.string().optional(),
  contractDate: z.string().datetime().optional(),
  contractNumber: z.string().optional(),
  contractStatus: z.enum(['pending', 'active', 'expired', 'cancelled']).optional(),
  warrantyPrice: z.number().positive().optional(),
  tariffPlan: z.string().optional(),
  notes: z.string().optional(),
})

// GET - получить список клиентов
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit

    const where: any = {}
    
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { carBrand: { contains: search, mode: 'insensitive' } },
        { carModel: { contains: search, mode: 'insensitive' } },
      ]
    }
    
    if (status) {
      where.contractStatus = status
    }

    const [clients, total] = await Promise.all([
      prisma.client.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.client.count({ where }),
    ])

    return NextResponse.json({
      clients,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching clients:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - создать нового клиента
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const data = clientSchema.parse(body)

    const client = await prisma.client.create({
      data: {
        ...data,
        contractDate: data.contractDate ? new Date(data.contractDate) : null,
      },
    })

    return NextResponse.json(client, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }
    console.error('Error creating client:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
