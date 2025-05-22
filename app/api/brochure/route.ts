import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const TO_USER = process.env.TO_USER

if (!EMAIL_USER || !EMAIL_PASS || !TO_USER) {
  throw new Error("Missing EMAIL_USER, EMAIL_PASS or TO_USER env variables")
}

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
      phoneNumber,
      companyName,
      industry,
      jobTitle,
      message,
      consent1,
      consent2,
    } = formData

    // Optionally validate required fields here

    const mailOptions = {
      from: `"Brochure Form" <${EMAIL_USER}>`,
      to: TO_USER,
      subject: `New Brochure Download Request from ${name}`,
      html: `
        <h2>Brochure Download Request Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p><strong>Consent 1:</strong> ${consent1 ? "Yes" : "No"}</p>
        <p><strong>Consent 2:</strong> ${consent2 ? "Yes" : "No"}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    // Optionally, you can return a brochure download link or trigger download here

    return NextResponse.json({ message: "Brochure request sent successfully" }, { status: 200 })
  } catch (error: any) {
    console.error("Brochure form error:", error)
    return NextResponse.json({ message: "Failed to send brochure request", error: error.message }, { status: 500 })
  }
}