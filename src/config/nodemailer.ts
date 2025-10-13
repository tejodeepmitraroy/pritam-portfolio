import nodemailer from 'nodemailer';
// Create a test account for development
// const testAccount = await nodemailer.createTestAccount();

export const transporter = nodemailer.createTransport({
	host: process.env.NODEMAILER_SMTP_HOST || 'smtp.ethereal.email',
	port: parseInt(process.env.NODEMAILER_SMTP_PORT || '587'),
	secure: process.env.NODEMAILER_SMTP_SECURE === 'true',
	auth: {
		user: process.env.NODEMAILER_SMTP_USER,
		pass: process.env.NODEMAILER_SMTP_PASSWORD,
	},
});
