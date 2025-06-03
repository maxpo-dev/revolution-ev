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

    const { name, email, phoneNumber, companyName, industry, jobTitle, message, consent1, consent2 } = formData

    // Enhanced professional HTML email template
    const mailOptions = {
      from: `"Brochure Form" <${EMAIL_USER}>`,
      to: TO_USER,
      subject: `New Brochure Download Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Brochure Request</title>
          <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .banner-section {
              width: 100%;
              height: 200px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              position: relative;
              overflow: hidden;
            }
            .banner-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            }
            .banner-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .banner-text {
              color: white;
              text-align: center;
              z-index: 2;
            }
            .banner-text h1 {
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 8px;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            }
            .banner-text p {
              font-size: 16px;
              font-weight: 300;
              opacity: 0.9;
            }
            .content-section {
              padding: 40px 30px;
            }
            .greeting {
              font-size: 18px;
              color: #2c3e50;
              margin-bottom: 25px;
              font-weight: 600;
            }
            .intro-text {
              font-size: 16px;
              color: #555;
              margin-bottom: 30px;
              line-height: 1.7;
            }
            .details-card {
              background-color: #f8f9fa;
              border-radius: 8px;
              padding: 25px;
              margin-bottom: 30px;
              border-left: 4px solid #667eea;
            }
            .details-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }
            .detail-item {
              margin-bottom: 15px;
            }
            .detail-label {
              font-weight: 600;
              color: #2c3e50;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .detail-value {
              font-size: 16px;
              color: #555;
              padding: 8px 0;
              border-bottom: 1px solid #e9ecef;
            }
            .message-section {
              grid-column: 1 / -1;
            }
            .consent-section {
              background-color: #e8f5e8;
              padding: 20px;
              border-radius: 6px;
              margin-top: 20px;
            }
            .consent-item {
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              font-size: 14px;
            }
            .consent-icon {
              width: 16px;
              height: 16px;
              border-radius: 50%;
              margin-right: 10px;
              display: inline-block;
            }
            .consent-yes {
              background-color: #28a745;
            }
            .consent-no {
              background-color: #dc3545;
            }
            .footer-section {
              background-color: #2c3e50;
              color: white;
              padding: 30px;
              text-align: center;
            }
            .company-info {
              margin-bottom: 25px;
            }
            .company-name {
              font-size: 20px;
              font-weight: 700;
              margin-bottom: 8px;
            }
            .company-tagline {
              font-size: 14px;
              opacity: 0.8;
            }
            .social-media {
              margin-bottom: 20px;
            }
            .social-title {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 15px;
            }
            .social-links {
              display: flex;
              justify-content: center;
              gap: 20px;
              flex-wrap: wrap;
            }
            .social-link {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 45px;
              height: 45px;
              background-color: rgba(255, 255, 255, 0.1);
              border-radius: 50%;
              text-decoration: none;
              color: white;
              font-size: 20px;
              transition: all 0.3s ease;
              border: 2px solid transparent;
            }
            .social-link:hover {
              background-color: rgba(255, 255, 255, 0.2);
              border-color: rgba(255, 255, 255, 0.3);
              transform: translateY(-2px);
            }
            .facebook { background-color: #3b5998; }
            .twitter { background-color: #1da1f2; }
            .linkedin { background-color: #0077b5; }
            .instagram { background-color: #e4405f; }
            .youtube { background-color: #ff0000; }
            .copyright {
              font-size: 12px;
              opacity: 0.7;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              padding-top: 20px;
            }
            @media only screen and (max-width: 600px) {
              .email-container {
                margin: 0;
                width: 100% !important;
              }
              .content-section {
                padding: 25px 20px;
              }
              .details-grid {
                grid-template-columns: 1fr;
              }
              .banner-text h1 {
                font-size: 24px;
              }
              .social-links {
                gap: 15px;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <!-- Banner Section -->
            <div class="banner-section">
              <!-- Replace with your actual banner image URL -->
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80" alt="Company Banner" class="banner-image">
              <div class="banner-overlay">
                <div class="banner-text">
                  <h1>New Brochure Request</h1>
                  <p>Professional inquiry received</p>
                </div>
              </div>
            </div>

            <!-- Content Section -->
            <div class="content-section">
              <div class="greeting">Hello Team,</div>
              <div class="intro-text">
                We've received a new brochure download request. Please find the complete details below and follow up accordingly.
              </div>

              <div class="details-card">
                <div class="details-grid">
                  <div class="detail-item">
                    <div class="detail-label">Full Name</div>
                    <div class="detail-value">${name}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Email Address</div>
                    <div class="detail-value">${email}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Phone Number</div>
                    <div class="detail-value">${phoneNumber}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Job Title</div>
                    <div class="detail-value">${jobTitle}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Company Name</div>
                    <div class="detail-value">${companyName}</div>
                  </div>
                  <div class="detail-item">
                    <div class="detail-label">Industry</div>
                    <div class="detail-value">${industry}</div>
                  </div>
                  <div class="detail-item message-section">
                    <div class="detail-label">Additional Message</div>
                    <div class="detail-value">${message || "No additional message provided"}</div>
                  </div>
                </div>

                <div class="consent-section">
                  <div class="consent-item">
                    <span class="consent-icon ${consent1 ? "consent-yes" : "consent-no"}"></span>
                    <span>Marketing Communications: ${consent1 ? "Accepted" : "Declined"}</span>
                  </div>
                  <div class="consent-item">
                    <span class="consent-icon ${consent2 ? "consent-yes" : "consent-no"}"></span>
                    <span>Terms & Conditions: ${consent2 ? "Accepted" : "Declined"}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Section -->
            <div class="footer-section">
              <div class="company-info">
                <div class="company-name">Your Company Name</div>
                <div class="company-tagline">Excellence in Business Solutions</div>
              </div>

              <div class="social-media">
                <div class="social-title">Connect With Us</div>
                <div class="social-links">
                  <a href="https://facebook.com/yourcompany" class="social-link facebook" title="Facebook">
                    📘
                  </a>
                  <a href="https://twitter.com/yourcompany" class="social-link twitter" title="Twitter">
                    🐦
                  </a>
                  <a href="https://linkedin.com/company/yourcompany" class="social-link linkedin" title="LinkedIn">
                    💼
                  </a>
                  <a href="https://instagram.com/yourcompany" class="social-link instagram" title="Instagram">
                    📷
                  </a>
                  <a href="https://youtube.com/yourcompany" class="social-link youtube" title="YouTube">
                    📺
                  </a>
                </div>
              </div>

              <div class="copyright">
                © ${new Date().getFullYear()} Your Company Name. All rights reserved.<br>
                This email was generated automatically from your website's brochure request form.
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Brochure request sent successfully" }, { status: 200 })
  } catch (error: any) {
    console.error("Brochure form error:", error)
    return NextResponse.json({ message: "Failed to send brochure request", error: error.message }, { status: 500 })
  }
}
