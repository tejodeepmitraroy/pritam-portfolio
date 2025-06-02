// GROQ queries for blogs

export const allBlogsQuery = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    categories[]->{title}
  }
`;

export const blogBySlugQuery = `
  *[_type == "blog" && slug.current == $slug][0] {
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
  }
`;
