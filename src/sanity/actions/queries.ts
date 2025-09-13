import { defineQuery } from 'next-sanity';

//Metadata Queriers
export const HOME_PAGE_METADATA_QUERY =
	defineQuery(`*[_type=="pages" && route=="/" ][0]{
  name,route,seo,_id,_type,_createdAt,_updatedAt
}`);
export const WORK_PAGE_METADATA_QUERY =
	defineQuery(`*[_type=="pages" && route=="/work" ][0]{
  name,route,seo,_id,_type,_createdAt,_updatedAt
}`);
export const BLOGS_PAGE_METADATA_QUERY =
	defineQuery(`*[_type=="pages" && route=="/blogs" ][0]{
  name,route,seo,_id,_type,_createdAt,_updatedAt
}`);

//Pages Query
export const ABOUT_QUERY = defineQuery(`*[_type=="about"][0]{
  _id,
   paragraph,
  paragraph2
}`);

export const SOCIAL_LINKS_QUERY = defineQuery(`*[_type=="socialLinks"][0]{
  _id,
  name,
  url,
}`);

export const SKILLS_QUERY = defineQuery(`*[_type == "skills"]{
  _id,
  name,
  percentage,
  sequence,
  subtitle
}`);

//project Query
export const ALL_PROJECTS_QUERY = defineQuery(`*[_type == "projects"] {
  _id,
  _type,
  title,
  thumbnail,
  slug,
  projects
}`);

export const PROJECT_BY_SLUG_QUERY = (slug: string) =>
	defineQuery(`*[_type == "projects" && slug.current == "${slug}"][0] {
  _id,
  _type,
  title,
  thumbnail,
  slug,
  projects
}`);

// Blogs Query
export const ALL_BLOGS_QUERY =
	defineQuery(` *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    categories[]->{title}
  }`);

export const BLOG_BY_SLUG_QUERY = (slug: string) =>
	defineQuery(` *[_type == "blog" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    categories[]->{title},
    "author": author->{name, "imageUrl": image.asset->url, bio},
    "relatedBlogs": *[_type == "blog" && _id != ^._id && count(categories[@._ref in ^.categories[]._ref]) > 0] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      "imageUrl": mainImage.asset->url,
      publishedAt
    }
  }`);

//Experience Query
export const ALL_EXPERIENCE_QUERY =
	defineQuery(`*[_type == "experience"] | order(startDate desc) {
    _id,
    title,
    company,
    startDate,
    endDate,
    isCurrentlyWorkingHere,
    points,
    technologies[],
    "companyLogo": companyImage.asset->url
  }`);

export const EXPERIENCE_BY_ID_QUERY = (id: string) =>
	defineQuery(`*[_type == "experience" && _id == "${id}"][0] {
    _id,
    title,
    company,
    startDate,
    endDate,
    isCurrentlyWorkingHere,
    points,
    technologies[],
    "companyLogo": companyImage.asset->url,
    description
  }`);

export const FEEDBACK_Query = defineQuery(`*[_type=="feedback" ]{
      _id,
      clientName,
      "slug":slug.current,
      clientPosition,
      rating,
      message,
      "image":image.asset->url,
      _type
    }`);

export const PRIVACY_POLICY_QUERY = defineQuery(`*[_type=="privacyPolicy"][0]`);

export const TERMS_CONDITIONS_QUERY = defineQuery(
	`*[_type=="termsConditions"][0]`
);

export const REFUND_POLICY_QUERY = defineQuery(`*[_type=="refundPolicy"][0]`);

export const GET_SINGLE_BLOG_QUERY = (slug: string) => {
	return defineQuery(`*[_type=="blogs" && slug.current == "${slug}"][0]`);
};
