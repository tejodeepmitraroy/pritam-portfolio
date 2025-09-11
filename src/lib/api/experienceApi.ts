import { client } from '../sanity';
import { allExperienceQuery, experienceByIdQuery } from '../queries';
import { Experience } from '@/types/sanity.types';

/**
 * Fetches all experience items from Sanity
 */
export async function getAllExperience(): Promise<Experience[]> {
	return await client.fetch(allExperienceQuery);
}

/**
 * Fetches a single experience item by ID from Sanity
 * @param id - The ID of the experience to fetch
 */
export async function getExperienceById(
	id: string
): Promise<Experience | null> {
	return await client.fetch(experienceByIdQuery, { id });
}
