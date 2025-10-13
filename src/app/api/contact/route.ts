import { transporter } from '@/config/nodemailer';
import { NextResponse } from 'next/server';
import { render } from '@react-email/components';
import ContactEmail from '@/emails/ContactEmail';

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

		const emailHtml = await render(
			await ContactEmail({ name, email, message })
		);

		// Send mail with defined transport object
		const info = await transporter.sendMail({
			from: `"${name}" <${process.env.SENDER_EMAIL}>`,
			to: process.env.SENDER_EMAIL, // Send to your email
			subject: `New Contact Form Submission from ${name}`,
			text: `${name} has submitted a new contact form submission from ${email}`,
			html: emailHtml,
		});

		console.log('Message sent successfully:', info);

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
