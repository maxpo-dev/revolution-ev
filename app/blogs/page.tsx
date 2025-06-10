import BlogGridClient from "@/components/ui/blogGridComponent";
import { getBlogPostsByProject, getCategoriesByProject } from "@/sanity/lib/blogs";

export default async function NewsBlogGrid() {
  const posts = await getBlogPostsByProject("rev");
  const categories = (await getCategoriesByProject("rev")) || [];

  return (
    <section className="bg-white">
      <BlogGridClient posts={posts} categories={categories} />
    </section>
  );
}
