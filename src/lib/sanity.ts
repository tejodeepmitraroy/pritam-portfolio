import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: process.env.NODE_ENV === 'production',
});

// Helper function for generating image URLs with only the asset reference data in your documents
export const urlFor = (source: SanityImageSource) => {
	return imageUrlBuilder(client).image(source);
};
