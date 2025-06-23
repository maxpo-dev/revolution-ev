import { NextResponse } from "next/server"
import { sendExhibitorEmail } from "@/lib/sendExhibitorEmail"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    await sendExhibitorEmail(formData)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error: any) {
    console.error("Email error:", error)
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    )
  }
}