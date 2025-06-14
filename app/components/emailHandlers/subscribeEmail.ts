export const SubscribeEmailTemplate = ({ email }: { email: string }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Subscription Confirmed</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 20px 0;">
      <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
   <tr>
  <td style="padding: 0; margin: 0;" align="center">
    <img
      src="https://cloud1.email2go.io/4825f2b20fb569c346c060a2f8c31c18/43cbb9c7495321f8ceb3210d8346899b4e54151968edd617da3ebf6cd138e014.jpg"
      alt="Banner"
      style="display: block; width: 100%; height: auto; border: 0;"
    />
  </td>
</tr>

            <!-- Content -->
            <tr>
              <td style="padding: 40px 30px;">
                <div style="text-align: center;">
                  <div style="display: inline-block; background: #e8fdfd; border-radius: 50%; padding: 15px; margin-bottom: 20px;">
                    <img src="https://img.icons8.com/ios-filled/50/00B5B8/secured-letter.png" width="30" height="30" alt="Mail Icon" />
                  </div>
                  <p style="font-size: 16px; color: #2C3E50;">
                    <strong>Hi there,</strong><br/><br/>
                    We're excited to have you on board! You'll now receive the latest news, event updates, and exclusive insights from <strong style="color: #00B5B8;">Revolution EV Malaysia</strong>.
                  </p>

                  <p style="font-size: 16px; color: #2C3E50;">
                    This subscription was requested for:<br/>
                    <strong>${email}</strong>
                  </p>

                  <div style="background: #e8fdfd; padding: 20px; border-radius: 8px; border-left: 4px solid #00B5B8; margin: 30px 0;">
                    <p style="margin: 0; font-size: 15px; color: #2C3E50;">
                      Follow us for more updates and early access to event news!
                    </p>
                  </div>

                  <!-- Social Icons -->
                   <div style="text-align: center; margin: 30px 0;">
                      <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                        <tr>
                          <td style="padding: 0 8px;">
                            <a href=https://www.facebook.com/profile.php?id=61576595758079" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e8fdfd; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
            
                           <td style="padding: 0 8px;">
                            <a href="https://x.com/revolutionev_" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e8fdfd; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://img.icons8.com/?size=100&id=YfCbGWCWcuar&format=png&color=000000" alt="X" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                            <td style="padding: 0 8px;">
                            <a href="https://www.youtube.com/channel/UCYhYC3ZVz64d9L1vVV9rQ5g" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e8fdfd; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Youtube" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                          <td style="padding: 0 8px;">
                            <a href="https://www.linkedin.com/company/revolutionev/" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e8fdfd; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                          <td style="padding: 0 8px;">
                            <a href="https://www.instagram.com/_revolutionev" target="_blank" style="display: inline-block; width: 50px; height: 50px; background: #e8fdfd; border-radius: 50%; text-align: center; line-height: 50px; text-decoration: none;">
                              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" height="24" style="vertical-align: middle;" />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background: #2C3E50; padding: 20px; text-align: center;">
                <p style="margin: 0; color: #BDC3C7; font-size: 12px;">
                  ©️ 2025 Revolution EV Malaysia. All rights reserved.
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
