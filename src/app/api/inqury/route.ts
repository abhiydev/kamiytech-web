import { NextResponse } from 'next/server'
import Inquiry from '../models/inquryModel'
import connectDB from '../db/db'

interface InquiryRequestBody {
  name: string
  contactNumber?: string
  email: string
  message: string
  requirement?: string
}

// GET route to fetch all inquiries
export async function GET() {
  await connectDB()
  try {
    const inquiries = await Inquiry.find()
    return NextResponse.json(inquiries)
  } catch (err) {
    console.error('Failed to fetch inquiries:', err)
    return NextResponse.json(
      { error: 'Failed to fetch inquiries.' },
      { status: 500 }
    )
  }
}

// POST route to add a new inquiry
export async function POST(req: Request) {
  await connectDB()
  try {
    const body: InquiryRequestBody = await req.json()
    const { name, contactNumber, email, message, requirement } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const newInquiry = new Inquiry({ name, contactNumber, email, requirement, message })
    const saved = await newInquiry.save()
    return NextResponse.json(saved, { status: 201 })
  } catch (error) {
    console.error('Error processing the request:', error)
    return NextResponse.json(
      { error: 'Failed to process the request.' },
      { status: 500 }
    )
  }
}
