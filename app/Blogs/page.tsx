import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    title: "Why the Future is Electric: The Rise of EV Cars",
    image: "/images/blogs/car1.jpg",
    date: "26 May 2025",
    category: "EV Cars",
  },
  {
    title: "Top Reasons to Switch to an Electric Vehicle in 2025",
    image: "/images/blogs/car2.jpg",
    date: "26 May 2025",
    category: "Electric Vehicles",
  },
  {
    title: "Why the Future is Electric: The Rise of EV Cars",
    image: "/images/blogs/car3.jpg",
    date: "26 May 2025",
    category: "EV Cars",
  },
  {
    title: "Top Reasons to Switch to an Electric Vehicle in 2025",
    image: "/images/blogs/car4.jpg",
    date: "26 May 2025",
    category: "Electric Vehicles",
  },
  {
    title: "Why the Future is Electric: The Rise of EV Cars",
    image: "/images/blogs/car5.jpg",
    date: "26 May 2025",
    category: "EV Cars",
  },
  {
    title: "Top Reasons to Switch to an Electric Vehicle in 2025",
    image: "/images/blogs/car6.jpg",
    date: "26 May 2025",
    category: "Electric Vehicles",
  },
]

export default function NewsBlogGrid() {
  return (
    <section className="bg-white px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
        News & Blogs
      </h2>

      {/* Filter Tabs (Mockup) */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {['View All', 'Electric Vehicles', 'Battery', 'OEMs', 'Malaysia', 'Sustainability'].map(
          (filter, index) => (
            <button
              key={index}
              className={`px-4 py-1 rounded-full text-sm font-medium border border-gray-300 ${
                filter === 'View All' ? 'bg-green-500 text-white' : 'bg-black text-white'
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-lg group border-2 ${
              idx === 0 ? 'lg:col-span-3 h-96' : 'h-60'
            }`}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <h3 className="text-lg font-semibold line-clamp-2">
                {article.title}
              </h3>
              <div className="text-xs opacity-80 mt-1 flex items-center gap-3">
                <span>{article.date}</span>
                <span className="text-white/50">|</span>
                <span>{article.category}</span>
              </div>
            </div>
            <ArrowUpRight className="absolute top-4 right-4 text-white w-5 h-5 opacity-80" />
          </div>
        ))}
      </div>
    </section>
  )
}
