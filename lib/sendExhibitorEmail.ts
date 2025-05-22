import nodemailer from "nodemailer"

export async function sendExhibitorEmail(formData: {
  name: string
  email: string
  phoneNumber: string
  companyName: string
  industry: string
  jobTitle: string
  message: string
  consent1: boolean
  consent2: boolean
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_USER,
    subject: "New Exhibitor Registration",
    html: `
      <h3>New Exhibitor Registration</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
      <p><strong>Company:</strong> ${formData.companyName}</p>
      <p><strong>Industry:</strong> ${formData.industry}</p>
      <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
      <p><strong>Message:</strong> ${formData.message || "N/A"}</p>
      <p><strong>Accepted Terms:</strong> ${formData.consent1 ? "Yes" : "No"}</p>
      <p><strong>Marketing Consent:</strong> ${formData.consent2 ? "Yes" : "No"}</p>
    `,
  }

  const info = await transporter.sendMail(mailOptions)
  return info
}