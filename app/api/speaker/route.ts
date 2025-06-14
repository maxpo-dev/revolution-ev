// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"

// const EMAIL_USER = process.env.EMAIL_USER
// const EMAIL_PASS = process.env.EMAIL_PASS
// const TO_USER = process.env.TO_USER

// if (!EMAIL_USER || !EMAIL_PASS || !TO_USER) {
//   throw new Error("Missing EMAIL_USER, EMAIL_PASS or TO_USER env variables")
// }

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// })

// export async function POST(request: Request) {
//   try {
//     const formData = await request.json()

//     const { name, email, phone, organization, industry, topic, bio } = formData

//     const mailOptions = {
//       from: `"Speaker Form" <${EMAIL_USER}>`,
//       to: TO_USER,
//       subject: `New Speaker Proposal from ${name}`,
//       html: `
//         <h2>Speaker Proposal Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Email:</strong> ${phone}</p>
//         <p><strong>Organization:</strong> ${organization || "N/A"}</p>
//         <p><strong>Email:</strong> ${industry || "N/A"}</p>
//         <p><strong>Proposed Topic:</strong> ${topic || "N/A"}</p>
//         <p><strong>Bio:</strong><br/>${bio ? bio.replace(/\n/g, "<br/>") : "N/A"}</p>
//       `,
//     }

//     await transporter.sendMail(mailOptions)

//     return NextResponse.json({ message: "Speaker proposal sent successfully" }, { status: 200 })
//   } catch (error: any) {
//     console.error("Speaker form error:", error)
//     return NextResponse.json({ message: "Failed to send speaker proposal", error: error.message }, { status: 500 })
//   }
// }
