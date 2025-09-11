// GROQ queries for projects

export const allProjectsQuery = `
  *[_type == "projects"] {
  _id,
  _type,
  title,
  thumbnail,
  slug,
  projects
}
`;

export const projectBySlugQuery = (slug: string) => `
  *[_type == "projects" && slug.current == "${slug}"][0] {
  _id,
  _type,
  title,
  thumbnail,
  slug,
  projects
}
`;
