import { client } from "../sanity";
import { allExperienceQuery, experienceByIdQuery } from "../queries";

export interface Experience {
  _id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  isCurrentlyWorkingHere: boolean;
  points: string[];
  technologies: string[];
  companyLogo?: string;
  description?: string;
}

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
