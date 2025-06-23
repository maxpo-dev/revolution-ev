interface FormDataProps {
  EVENT_NAME: string;
  EVENT_WEBSITE: string;
  EVENT_DATE: string | Date;
  EVENT_EMAIL: string;
  name: string;
}

export const ThankYouEmailHandler = ({
  formData,
}: {
  formData: FormDataProps;
}) => {
  const { EVENT_NAME, EVENT_WEBSITE, EVENT_DATE, EVENT_EMAIL, name } = formData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - ${EVENT_NAME}</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 20px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">

              <!-- Header Banner -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                    ${EVENT_NAME}
                  </h1>
                  <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px; font-weight: 300;">
                    ${EVENT_DATE}
                  </p>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding: 40px 30px;">
                <div style="text-align: center; margin-bottom: 30px;">
<div style="display: inline-block; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; padding: 15px; margin-bottom: 20px;">
  <img src="https://img.icons8.com/ios-filled/50/ffffff/checkmark.png" width="30" height="30" alt="check" style="display: block;" />
</div>

                  <div style="color: #555; line-height: 1.6; font-size: 16px;">
                    <p style="margin-bottom: 20px;">
                      <strong>Hey ${name?.split(" ")[0] || "there"},</strong>
                    </p>

                    <p style="margin-bottom: 20px;">
                      Thank you for your interest in <strong style="color: #667eea;">${EVENT_NAME}</strong> taking place from <strong style="color: #764ba2;">${EVENT_DATE}</strong>.
                    </p>

                    <p style="margin-bottom: 25px;">
                      Someone from our team will be in touch with you shortly to discuss sponsorship opportunities.
                    </p>

                    <div style="background: linear-gradient(135deg, #f8f9ff, #f0f4ff); padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 25px 0;">
                      <p style="margin: 0; color: #555;">
                        Meanwhile, visit our <a href="${EVENT_WEBSITE}" style="color: #667eea; text-decoration: none; font-weight: 600;">website</a> or follow us on social media for the latest updates:
                      </p>
                    </div>

                    <!-- Social Media Buttons -->
                    <div style="text-align: center; margin: 30px 0;">
                      <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                        <tr>
                          <td style="padding: 0 8px;">
                            <a href="https://facebook.com/revolutionevmalaysia" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #F3F6FF; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                          <td style="padding: 0 8px;">
                            <a href="https://twitter.com/revolutionevmy" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #F3F6FF; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                          <td style="padding: 0 8px;">
                            <a href="https://linkedin.com/company/revolutionevmalaysia" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #F3F6FF; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                          <td style="padding: 0 8px;">
                            <a href="https://instagram.com/revolutionevmalaysia" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #F3F6FF; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>

              <!-- Signature Section -->
              <tr>
                <td style="background: #f8f9fa; padding: 30px; border-top: 1px solid #e9ecef;">
                  <div style="text-align: center;">
                    <p style="margin: 0 0 10px 0; font-weight: 600; color: #2c3e50; font-size: 18px;">
                      Best Regards,
                    </p>
                    <p style="margin: 0 0 5px 0; font-weight: 700; color: #667eea; font-size: 20px;">
                      ${EVENT_NAME}
                    </p>
                    <p style="margin: 0 0 20px 0;">
                      <a href="${EVENT_WEBSITE}" style="color: #764ba2; text-decoration: none; font-weight: 500;">${EVENT_WEBSITE}</a>
                    </p>

                    <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e9ecef; display: inline-block;">
                      <p style="margin: 0; color: #666; font-size: 14px;">
                        For any queries, reach us at: 
                        <a href="mailto:${EVENT_EMAIL}" style="color: #667eea; text-decoration: none; font-weight: 600;">${EVENT_EMAIL}</a>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: #2c3e50; padding: 20px; text-align: center;">
                  <p style="margin: 0; color: #bdc3c7; font-size: 12px;">
                    ©️ 2025 ${EVENT_NAME}. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};
