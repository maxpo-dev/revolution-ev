import { type NextRequest, NextResponse } from "next/server"
import nodemailer from 'nodemailer'

async function sendThankYouEmail(email: string) {
  // Create transporter with proper credentials
  const transporter = nodemailer.createTransport({
     host:'smtpout.secureserver.net',
    port: 465,
    secure:true,
    auth: {
      user: process.env.EMAIL_USER, // Changed to match your .env
      pass: process.env.EMAIL_PASS, // Changed to match your .env
    },
  })

  const mailOptions = {
    from: `"Revolution EV Malaysia" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank you for subscribing to Revolution EV Malaysia!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Your existing HTML template -->
      </div>
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent: %s', info.messageId)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    console.log("Saving email to database:", email)
    await sendThankYouEmail(email)

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { error: "Internal server error. Please try again later." }, 
      { status: 500 }
    )
  }
}