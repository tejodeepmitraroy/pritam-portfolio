import { getAllProjects } from '@/lib/api';

// In your component
const projects = await getAllProjects();import { getAllProjects } from '@/lib/api';

// In your component
const projects = await getAllProjects();import { client } from "../sanity";
import { allEducationQuery, educationByIdQuery } from "../queries";

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  isCurrentlyStudyingHere: boolean;
  grade?: string;
  institutionLogo?: string;
  description?: string;
  achievements?: string[];
}

/**
 * Fetches all education items from Sanity
 */
export async function getAllEducation(): Promise<Education[]> {
  return await client.fetch(allEducationQuery);
}

/**
 * Fetches a single education item by ID from Sanity
 * @param id - The ID of the education to fetch
 */
export async function getEducationById(id: string): Promise<Education | null> {
  return await client.fetch(educationByIdQuery, { id });
}
