import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/sanity/actions/queryActions';

export default async function robots(): Promise<MetadataRoute.Robots> {
	const baseUrl = process.env.FRONTEND_BASE_URL;
	const projects = await getAllProjects();

	return {
		rules: [
			{
				userAgent: 'Googlebot',
				allow: [
					'/',
					'/about',
					'/projects',
					...projects.map((project) => `/projects/${project.slug?.current}`),
					'/experience',
					'/services',
					'/contact',
				],
				disallow: '/private/',
			},
			{
				userAgent: ['Applebot', 'Bingbot'],
				disallow: ['/'],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
