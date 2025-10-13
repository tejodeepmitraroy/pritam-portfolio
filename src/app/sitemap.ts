import { getAllProjects } from '@/sanity/actions/queryActions';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.FRONTEND_BASE_URL;
	const projects = await getAllProjects();

	const projectUrls = projects.map((project) => ({
		url: `${baseUrl}/projects/${project.slug?.current}`,
		lastModified: new Date(),
		priority: 0.5,
	}));

	return [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		...projectUrls,

		{
			url: `${baseUrl}/experience`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	];
}
