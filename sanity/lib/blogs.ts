import { client } from "../client";
import { blogPostsByProject, categoriesByProject } from "../queries";
import { SanityDocument } from "next-sanity";

export async function getBlogPostsByProject(
  slug: string
): Promise<SanityDocument[]> {
  return await client.fetch(blogPostsByProject, { slug });
}

export async function getCategoriesByProject(slug: string): Promise<string[]> {
  const rawCategories: string[] = await client.fetch(categoriesByProject, {
    slug,
  });
  const unique = Array.from(new Set(rawCategories));
  return unique;
}
