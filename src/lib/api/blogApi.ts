import { client } from "../sanity";
import { allBlogsQuery, blogBySlugQuery } from "../queries";

export interface Category {
  title: string;
}

export interface Author {
  name: string;
  imageUrl: string;
  bio: string;
}

export interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content?: any;
  imageUrl: string;
  publishedAt: string;
  categories: Category[];
  author?: Author;
  relatedBlogs?: Blog[];
}

/**
 * Fetches all blogs from Sanity
 */
export async function getAllBlogs(): Promise<Blog[]> {
  return await client.fetch(allBlogsQuery);
}

/**
 * Fetches a single blog by slug from Sanity
 * @param slug - The slug of the blog to fetch
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return await client.fetch(blogBySlugQuery, { slug });
}
