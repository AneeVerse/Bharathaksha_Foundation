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
    text: `
      You have a new contact form submission:
      First Name: ${data.firstName}
      Last Name: ${data.lastName}
      Email: ${data.email}
      Phone Number: ${data.phoneNumber}
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
