const nodemailer = require("nodemailer");

const sendMailToUser = async (email, password, userName) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "aravinthnathan1@gmail.com",
                pass: "eudd dshl trbl dlhm"
            }
        });

        const mailOptions = {
            from: "aravinthnathan1@gmail.com",
            to: email,
            subject: "Welcome our website",
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Static Template</title>
  </head>
  <body>
    <table style="margin: 0 auto; border-spacing: 0; font-family: Arial; font-size: 15px; width: 600px; color: #404040">
      <tbody style="background: #fff8e8;">
        <tr>
          <td style="padding-top: 20px; padding-bottom: 10px; padding-left: 35px;">
            <!-- <img height="40"
              src="https://lubemonitor-tst.azurewebsites.net/static/media/appBanner.aaa19c1b.png"> -->
          </td>
         <span
                style="padding: 3px 10px; background: #55b323 color: #fff; border-radius: 3px; font-size: 14px;">
                there
              </span>
            </td>
         
          
        </tr>
        <tr>
          <td colspan="2" style="padding: 35px; padding-top: 10px; padding-bottom: 20px;">
            <p
              style="margin: 0; line-height: 25px; background: #fff; border-radius: 3px;">
              <span style="padding: 20px 30px; display: block; border-bottom: 2px solid #fff8e8;">
                Good Day ${userName},
                <br />
                <span style="display: block; margin: 10px;"></span>
                   How are you?
              </span>
              <span style="padding: 20px 30px; display: block;">
              
              <span style="display: inline-block; line-height: 22px;">
                      This is your Password: ${password}
                  </span>
                
                <br />
                <span style="display: inline-block; margin-top: 20px; line-height: 22px;">
                    Best Regards,
                    <br />
                    KES
                </span>
              </span>
            </p>
         </td>
        </tr>
        <tr>
          <td colspan="2" style="padding: 0 35px 20px; font-size: 12px; color: #c5b99d; line-height: 17px;" align="center">
          The material in this email may be confidential, privileged and/or protected by copyright.<br />Use of this email should be limited accordingly. If this email has been sent to you in error, please contact us immediately.
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`
        }

        await transporter.sendMail(mailOptions);
        console.log(`Mail successfully sended to ${userName}`);

    } catch (error) {
        console.log(error.message);

    }
};


module.exports = sendMailToUser;