import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use 'gmail' or your preferred service
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"Kavya Clinic Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.DESTINATION_EMAIL, // Receiver address
      subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from the contact form on your website.</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr>
            <td><strong>Name:</strong></td>
            <td>${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><strong>Phone Number:</strong></td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td><strong>Subject:</strong></td>
            <td>${subject}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${message}</td>
          </tr>
        </table>
      `,
    };

    // Send mail only if credentials are set and not the default placeholders
    if (
      process.env.SMTP_EMAIL && 
      process.env.SMTP_PASSWORD && 
      !process.env.SMTP_EMAIL.includes('your_email') && 
      !process.env.SMTP_PASSWORD.includes('your_app_password')
    ) {
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
      } catch (emailError) {
        console.error('Error sending email (check credentials):', emailError);
      }
    } else {
      console.log('Skipping email notification because SMTP credentials are not configured in .env.local');
    }

    // Optional Google Sheets Integration for Contact form
    if (process.env.GOOGLE_SCRIPT_URL_CONTACT) {
      try {
        const timestamp = new Date().toLocaleString();
        const sheetData = {
          type: "Contact",
          name: `${firstName} ${lastName}`,
          email,
          phone,
          subject,
          message,
          timestamp
        };

        const response = await fetch(process.env.GOOGLE_SCRIPT_URL_CONTACT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetData),
          redirect: 'follow'
        });
        
        if (!response.ok) {
           console.error('Google Sheet Webhook returned status:', response.status);
        } else {
           console.log('Successfully sent to Google Sheet Webhook (Contact)');
        }
      } catch (sheetError) {
        console.error('Error adding to Google Sheet:', sheetError);
      }
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in contact route:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
