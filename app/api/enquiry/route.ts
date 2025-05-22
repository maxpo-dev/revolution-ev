import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      companyName,
      phoneNumber,
      industry,
      message,
      consent1,
      consent2,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Revolution EV - Enquiry" <${process.env.EMAIL_USER}>`,
      to: "avalasandeep02@gmail.com", // Replace as needed
      subject: "New Enquiry - Revolution EV",
      html: `
        <h2>New Enquiry Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p><strong>Agreed to Terms (consent1):</strong> ${consent1 ? "Yes" : "No"}</p>
        <p><strong>Marketing Consent (consent2):</strong> ${consent2 ? "Yes" : "No"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully and email sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit enquiry." },
      { status: 500 }
    );
  }
}
