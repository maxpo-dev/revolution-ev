export const blogPostsByProject = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  project->slug.current == $slug
] | order(publishedAt desc)[0...12] {
  _id,
  title,
 "mainImage": mainImage.asset->url,
 "categories": categories[]->title,
  slug,
  publishedAt
}`;

export const categoriesByProject = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  project->slug.current == $slug
].categories[]->title`;
