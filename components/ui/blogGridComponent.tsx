"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogGridClientProps {
  posts: any[];
  categories: string[];
}

export default function BlogGridClient({
  posts,
  categories,
}: BlogGridClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("View All");

  const allCategories = ["View All", ...Array.from(new Set(categories))];

  const filteredPosts =
    selectedCategory === "View All"
      ? posts
      : posts.filter((post) => post.categories?.includes(selectedCategory));

  const router = useRouter();
  return (
    <div>
      {/* Header + Filters */}
      <div className="bg-black px-4 sm:px-6 md:px-10 lg:px-20 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          News & Blogs
        </h2>

        <div className="flex flex-wrap gap-3">
          {allCategories.map((category, index) => {
            const isSelected = category === selectedCategory;
            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-none text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-gradient-to-r from-[#00B5B8] to-[#4CD964] text-white"
                    : "bg-transparent border border-[#444] text-white hover:border-[#777]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 lg:px-28 py-10">
        {filteredPosts.map((article, idx) => (
          <div
            key={article._id}
            className={`relative cursor-pointer overflow-hidden rounded-lg group border-2 ${
              idx === 0 ? "lg:col-span-3" : ""
            }`}
            onClick={() => router.push(`/blogs/${article.slug}`)}
          >
            <Image
              src={article.mainImage || "/images/blogs/default.jpg"}
              alt={article.title}
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
