import { Link } from "react-router-dom";

interface BlogCardProps {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  }
}

export function BlogCard({
  date = "Mar 16, 2020",
  title = "Boost your conversion rate",
  excerpt = "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
  author = {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    avatarUrl: "/placeholder.svg?height=64&width=64"
  },
  slug = "boost-your-conversion-rate"
}: BlogCardProps) {
  return (
    <Link to={`/${slug}`} >
      <article className="max-w-2xl py-6 rounded-lg font-sans">
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <time dateTime={date}>{date}</time>
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h2>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">{excerpt}</p>
        <div className="flex items-center">
          <img
            src={author.avatarUrl}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-500">{author.role}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}