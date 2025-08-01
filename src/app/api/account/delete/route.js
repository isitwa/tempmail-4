import { NextResponse } from 'next/server'

export async function DELETE(request) {
  try {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY

    if (!API_URL || !API_KEY) {
      return NextResponse.json(
        { error: 'API configuration missing' },
        { status: 500 }
      )
    }

    // Parse the request body
    const body = await request.json()
    const { accountId } = body

    // Validate required fields
    if (!accountId) {
      return NextResponse.json(
        { error: 'accountId is required' },
        { status: 400 }
      )
    }

    const response = await fetch(`${API_URL}site/account/${accountId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `bearer ${API_KEY}`
      }
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Sendbun API error:', response.status, errorData)
      
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Email account not found' },
          { status: 404 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to delete email account', details: errorData },
        { status: response.status }
      )
    }

    return NextResponse.json({
      status: true,
      message: 'Email account deleted successfully'
    })

  } catch (error) {
    console.error('Error deleting email account:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 