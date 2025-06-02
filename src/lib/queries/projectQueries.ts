// GROQ queries for projects

export const allProjectsQuery = `
  *[_type == "project"] | order(orderRank) {
    _id,
    title,
    slug,
    description,
    projectLink,
    githubLink,
    "imageUrl": mainImage.asset->url,
    tags
  }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    projectLink,
    githubLink,
    "imageUrl": mainImage.asset->url,
    tags,
    "relatedProjects": *[_type == "project" && references(^._id)] {
      _id,
      title,
      slug,
      "imageUrl": mainImage.asset->url
    }
  }
`;
