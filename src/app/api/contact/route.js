import nodemailer from 'nodemailer';

export async function POST(request) {
  const data = await request.json(); // Get form data from frontend

  // Setup Nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services too, e.g., Yahoo, Outlook
    auth: {
      user: 'aneeverse@gmail.com', // Your email address (the one that sends emails)
      pass: 'brwq sdba yyal wepu', // Your email password or app-specific password
    },
  });

  // Define the email options
  const mailOptions = {
    from: `${data.email}`, // Sender address
    to: 'worldm957@gmail.com', // Receiver's email
    subject: 'New Contact Form Submission', // Email subject
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
        }
        .info {
          margin-bottom: 15px;
        }
        .info span {
          font-weight: bold;
          color: #333;
        }
        @media only screen and (max-width: 600px) {
          .container {
            padding: 10px;
          }
          h2 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>You have received a new contact form submission with the following details:</p>
        
        <div class="info">
          <p><span>First Name:</span> ${data.firstName}</p>
        </div>
        
        <div class="info">
          <p><span>Last Name:</span> ${data.lastName}</p>
        </div>
        
        <div class="info">
          <p><span>Email:</span> ${data.email}</p>
        </div>
        
        <div class="info">
          <p><span>Subject:</span> ${data.subject}</p>
        </div>
        
        <div class="info">
          <p><span>Message:</span> ${data.message}</p>
        </div>
  
        <p>Kind regards,<br>Your Website Team</p>
      </div>
    </body>
    </html>
    `,
    text: `
      You have a new contact form submission:
      First Name: ${data.firstName}
      Last Name: ${data.lastName}
      Email: ${data.email}
      Subject: ${data.subject}
      Message: ${data.message}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ msg: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ msg: 'Error sending email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
