import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
 
    const mockSession = {
      user: {
        companyId: 'TechCorp' 
      }
    }

    const tickets = await prisma.ticket.findMany({
      where: {
        companyId: mockSession.user.companyId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    console.log("Tickets encontrados:", tickets)

    return NextResponse.json(tickets)

  } catch (error) {
    console.error('Error fetching tickets:', error)

    return NextResponse.json(
      { error: 'Error fetching tickets' },
      { status: 500 }
    )
  }
}