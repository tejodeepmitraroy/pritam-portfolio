import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Text,
	Heading,
	Hr,
	Button,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import * as React from 'react';

interface ContactEmailProps {
	name: string;
	email: string;
	message: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({
	name,
	email,
	message,
}) => {
	return (
		<Tailwind>
			<Html>
				<Head />
				<Body className="bg-gray-50 font-sans">
					<Container className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
						<Heading as="h1" className="mb-6 text-2xl font-bold text-gray-800">
							New Contact Form Submission
						</Heading>

						<Section className="mb-6">
							<Text className="mb-2 text-gray-700">
								<span className="font-semibold">From:</span> {name}
							</Text>
							<Text className="mb-4 text-gray-700">
								<span className="font-semibold">Email:</span> {email}
							</Text>

							<div className="mt-4 rounded-md bg-gray-50 p-4">
								<Text className="mb-2 font-medium text-gray-700">Message:</Text>
								<Text className="whitespace-pre-line text-gray-600">
									{message}
								</Text>
							</div>
						</Section>

						<Hr className="my-6 border-gray-200" />

						<Section className="text-center">
							<Text className="text-sm text-gray-500">
								This message was sent from the contact form on your portfolio
								website.
							</Text>
							<Button
								href={`mailto:${email}`}
								className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
							>
								Reply to {name.split(' ')[0]}
							</Button>
						</Section>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
};

export default ContactEmail;
