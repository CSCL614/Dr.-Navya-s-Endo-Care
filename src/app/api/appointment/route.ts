import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, date, service } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const tasks: Promise<unknown>[] = [];

    // Send mail task
    if (
      process.env.SMTP_EMAIL && 
      process.env.SMTP_PASSWORD && 
      !process.env.SMTP_EMAIL.includes('your_email') && 
      !process.env.SMTP_PASSWORD.includes('your_app_password')
    ) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: `"Dr. Navya's EndoCare" <${process.env.SMTP_EMAIL}>`,
        to: process.env.DESTINATION_EMAIL || process.env.SMTP_EMAIL,
        subject: `New Appointment Request from ${name} — Dr. Navya’s EndoCare`,
        html: `
          <h2>New Appointment Request — Dr. Navya’s EndoCare</h2>
          <p>You have received a new appointment request from the website.</p>
          <table border="1" cellpadding="10" style="border-collapse: collapse; font-family: sans-serif;">
            <tr><td><strong>Full Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Phone Number:</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td><strong>Preferred Date:</strong></td><td>${date || 'Not specified'}</td></tr>
            <tr><td><strong>Service Required:</strong></td><td>${service || 'General Endocrine Consultation'}</td></tr>
          </table>
          <br>
          <p>Please contact the patient to confirm their appointment.</p>
        `,
      };

      tasks.push(
        transporter.sendMail(mailOptions).catch(err => {
          console.error('Email error:', err);
        })
      );
    }

    // Google Sheets Integration via Webhook
    if (process.env.GOOGLE_SCRIPT_URL) {
      const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const sheetData = {
        name,
        phone,
        date: date || 'Not specified',
        service: service || 'General Endocrine Consultation',
        timestamp
      };

      tasks.push(
        fetch(process.env.GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetData),
          redirect: 'follow'
        }).catch(err => {
          console.error('Google Sheet error:', err);
        })
      );
    }

    // Execute integrations concurrently to eliminate request waterfalls
    if (tasks.length > 0) {
      await Promise.allSettled(tasks);
    }

    return NextResponse.json({ success: true, message: 'Appointment request received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling appointment request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
