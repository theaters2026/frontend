import { NextResponse } from 'next/server'
import { afishaApi } from '@/core/api/api'
import { API_CONSTANTS, DEFAULT_VALUES } from '@/shared/constants'
import { Show } from '@/shared/types'

export async function GET() {
  try {
    const response = await afishaApi.get<Show[]>('/shows/', {
      params: {
        limit: API_CONSTANTS.LIMITS.MAX_EVENTS,
        offset: DEFAULT_VALUES.API_OFFSET,
      },
    })

    const data = response.data

    const transformedShows: Show[] = data.map((show: Show) => ({
      id: show.id,
      externalId: show.externalId,
      name: show.name,
      image: show.image,
      minPrice: show.minPrice,
      maxPrice: show.maxPrice,
      shortInfo: show.shortInfo,
      fullInfo: show.fullInfo,
      ageLimit: show.ageLimit,
      duration: show.duration,
      events: show.events,
      detailed_url: show.detailed_url || '',
      type_num: show.type_num,
      desc: show.desc,
      partnerId: show.partnerId,
      publDate: show.publDate,
      premiereDate: show.premiereDate,
      isPushkin: show.isPushkin,
      shopId: show.shopId,
      createdAt: show.createdAt,
      updatedAt: show.updatedAt,
    }))

    return NextResponse.json({
      results: transformedShows,
      count: data.length,
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: API_CONSTANTS.HTTP_STATUS.INTERNAL_SERVER_ERROR }
    )
  }
}
