import { NextResponse } from 'next/server'
import { API_CONSTANTS } from '@/shared/constants'

export async function GET() {
  try {
    const response = await fetch(
      `${process.env['NEXT_PUBLIC_AFISHA_API_URL']}/shows`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data, {
      status: API_CONSTANTS.HTTP_STATUS.OK,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: API_CONSTANTS.HTTP_STATUS.INTERNAL_SERVER_ERROR }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: API_CONSTANTS.HTTP_STATUS.OK,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  )
}
