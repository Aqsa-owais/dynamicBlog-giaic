import Link from 'next/link'
import { getBlogPosts } from './lib/blogPosts'

export default function Home() {
  const posts = getBlogPosts()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.slug} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

