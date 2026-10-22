import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !phone) {
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
        subject: `New Contact Form: ${subject || 'General Inquiry'} — ${firstName} ${lastName || ''}`,
        html: `
          <h2>New Contact Message — Dr. Navya’s EndoCare</h2>
          <table border="1" cellpadding="10" style="border-collapse: collapse; font-family: sans-serif;">
            <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName || ''}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email || 'Not provided'}</td></tr>
            <tr><td><strong>Phone:</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td><strong>Subject:</strong></td><td>${subject || 'General Inquiry'}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${message || 'No message provided'}</td></tr>
          </table>
        `,
      };

      tasks.push(
        transporter.sendMail(mailOptions).catch(err => {
          console.error('Email error:', err);
        })
      );
    }

    // Google Sheets Integration
    if (process.env.GOOGLE_SCRIPT_URL) {
      const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      const sheetData = {
        name: `${firstName} ${lastName || ''}`.trim(),
        email: email || '',
        phone,
        subject: subject || 'General Inquiry',
        message: message || '',
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

    // Execute concurrently
    if (tasks.length > 0) {
      await Promise.allSettled(tasks);
    }

    return NextResponse.json({ success: true, message: 'Message received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
