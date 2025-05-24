import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const {
      name,
      email,
      companyName,
      phoneNumber,
      jobTitle,
      industry,
      message,
      consent1,
      consent2,
    } = formData;

    // Basic validation
    if (!name || !email || !companyName || !phoneNumber || !jobTitle || !industry) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_USER, // Your destination email
      subject: "New Exhibitor Registration",
      html: `
        <h3>New Exhibitor Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p><strong>Consent 1:</strong> ${consent1 ? "Yes" : "No"}</p>
        <p><strong>Consent 2:</strong> ${consent2 ? "Yes" : "No"}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
