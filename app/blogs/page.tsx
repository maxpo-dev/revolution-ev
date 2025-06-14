import BlogGridClient from "@/components/ui/blogGridComponent";
import { getBlogPostsByProject } from "@/sanity/lib/blogs";

export default async function NewsBlogGrid() {
  const posts = await getBlogPostsByProject("rev");

  return (
    <section className="bg-white">
      <BlogGridClient posts={posts} />
    </section>
  );
}
