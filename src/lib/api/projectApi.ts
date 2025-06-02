import { client } from "../sanity";
import { allProjectsQuery, projectBySlugQuery } from "../queries";

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  projectLink?: string;
  githubLink?: string;
  imageUrl: string;
  tags: string[];
  content?: any;
  relatedProjects?: Project[];
}

/**
 * Fetches all projects from Sanity
 */
export async function getAllProjects(): Promise<Project[]> {
  return await client.fetch(allProjectsQuery);
}

/**
 * Fetches a single project by slug from Sanity
 * @param slug - The slug of the project to fetch
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return await client.fetch(projectBySlugQuery, { slug });
}
