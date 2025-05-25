import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Load env vars
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const TO_USER = process.env.TO_USER

if (!EMAIL_USER || !EMAIL_PASS || !TO_USER) {
  throw new Error("Missing EMAIL_USER, EMAIL_PASS or TO_USER env variables")
}

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const {
      name,
      email,
      companyName,
      phoneNumber,
      industry,
      jobTitle,
      message,
      consent1,
      consent2,
    } = formData

    // Validate required fields here if needed

    const mailOptions = {
      from: `"Sponsor Form" <${EMAIL_USER}>`,
      to: TO_USER,
      subject: `New Sponsor Enquiry from ${name}`,
      html: `
        <h2>New Sponsor Enquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p><strong>Consent 1:</strong> ${consent1 ? "Yes" : "No"}</p>
        <p><strong>Consent 2:</strong> ${consent2 ? "Yes" : "No"}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Sponsor enquiry sent successfully" }, { status: 200 })
  } catch (error: any) {
    console.error("Sponsor form email error:", error)
    return NextResponse.json({ message: "Failed to send sponsor enquiry", error: error.message }, { status: 500 })
  }
}