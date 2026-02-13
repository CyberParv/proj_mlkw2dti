import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Integrate email sending service here
    // Simulate successful send with a delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
