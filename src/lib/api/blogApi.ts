import { client } from '../sanity';
import { allBlogsQuery, blogBySlugQuery } from '../queries';

/**
 * Fetches all blogs from Sanity
 */
export async function getAllBlogs() {
	return await client.fetch(allBlogsQuery);
}

/**
 * Fetches a single blog by slug from Sanity
 * @param slug - The slug of the blog to fetch
 */
export async function getBlogBySlug(slug: string) {
	return await client.fetch(blogBySlugQuery, { slug });
}
