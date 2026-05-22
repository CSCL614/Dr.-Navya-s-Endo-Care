import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, date, service } = body;

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
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p>You have received a new appointment request from your website.</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr>
            <td><strong>Full Name:</strong></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td><strong>Phone Number:</strong></td>
            <td>${phone}</td>
          </tr>
          <tr>
            <td><strong>Preferred Date:</strong></td>
            <td>${date}</td>
          </tr>
          <tr>
            <td><strong>Service Required:</strong></td>
            <td>${service}</td>
          </tr>
        </table>
        <br>
        <p>Please contact the patient to confirm their appointment.</p>
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
        // We log the error but don't fail the request so the Google Sheet part can still run
      }
    } else {
      console.log('Skipping email notification because SMTP credentials are not configured in .env.local');
    }

    // Google Sheets Integration via Google Apps Script Webhook
    if (process.env.GOOGLE_SCRIPT_URL) {
      try {
        const timestamp = new Date().toLocaleString();
        const sheetData = {
          name,
          phone,
          date,
          service,
          timestamp
        };

        const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
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
           console.log('Successfully sent to Google Sheet Webhook');
        }
      } catch (sheetError) {
        console.error('Error adding to Google Sheet:', sheetError);
        // We do not fail the request if sheet fails, as email was already sent
      }
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
