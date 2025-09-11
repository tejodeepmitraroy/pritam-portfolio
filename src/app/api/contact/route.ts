import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validate environment variables
const requiredEnvVars = [
	'EMAIL_SERVER_HOST',
	'EMAIL_SERVER_PORT',
	'EMAIL_SERVER_USER',
	'EMAIL_SERVER_PASSWORD',
	'EMAIL_FROM',
	'EMAIL_TO',
];

for (const envVar of requiredEnvVars) {
	if (!process.env[envVar]) {
		console.error(`Missing required environment variable: ${envVar}`);
	}
}

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, message } = body;

		// Basic validation
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: 'Please enter a valid email address' },
				{ status: 400 }
			);
		}

		// Create a test account for development
		const testAccount = await nodemailer.createTestAccount();

		// Create a transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_SERVER_HOST || 'smtp.ethereal.email',
			port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
			secure: process.env.EMAIL_SERVER_SECURE === 'true',
			auth: {
				user: process.env.EMAIL_SERVER_USER || testAccount.user,
				pass: process.env.EMAIL_SERVER_PASSWORD || testAccount.pass,
			},
		});

		// Send mail with defined transport object
		const info = await transporter.sendMail({
			from: `"${name}" <${process.env.EMAIL_FROM || email}>`,
			to: process.env.EMAIL_TO || email, // Send to your email
			subject: `New Contact Form Submission from ${name}`,
			text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
			html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
		});

		// Preview only available when sending through an Ethereal account
		if (process.env.NODE_ENV === 'development') {
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		}

		return NextResponse.json(
			{ message: 'Message sent successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ error: 'Failed to send message. Please try again later.' },
			{ status: 500 }
		);
	}
}
