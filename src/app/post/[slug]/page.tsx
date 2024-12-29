import { getBlogPostBySlug } from '@/app/lib/blogPosts'
import Comments from '@/app/components/comments'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div className="p-6 border-t">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <Comments postSlug={params.slug} />
      </div>
    </article>
  )
}

