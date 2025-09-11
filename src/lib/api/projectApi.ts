import { client } from '../sanity';
import { allProjectsQuery, projectBySlugQuery } from '../queries';
import { Projects } from '@/types/sanity.types';

export async function getAllProjects(): Promise<Projects[]> {
	return await client.fetch(allProjectsQuery);
}

/**
 * Fetches a single project by slug from Sanity
 * @param slug - The slug of the project to fetch
 */
export async function getProjectBySlug(slug: string): Promise<Projects | null> {
	return await client.fetch(projectBySlugQuery(slug));
}
