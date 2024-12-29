interface BlogPost {
    slug: string
    title: string
    excerpt: string
    content: string
    image: string
  }
  
  const blogPosts: BlogPost[] = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js',
      content: '<p>Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, we\'ll explore the basics of Next.js and how to get started with your first project.</p><h2>Why Next.js?</h2><p>Next.js offers several benefits over traditional React applications:</p><ul><li>Server-side rendering</li><li>Static site generation</li><li>Automatic code splitting</li><li>Built-in CSS support</li><li>API routes</li></ul><p>These features make Next.js an excellent choice for building fast, SEO-friendly web applications.</p>',
      image: '/nextjs.png',
    },
    {
      slug: 'mastering-tailwind-css',
      title: 'Mastering Tailwind CSS',
      excerpt: 'Discover the power of utility-first CSS with Tailwind',
      content: '<p>Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. Unlike traditional CSS frameworks, Tailwind doesn\'t provide pre-built components. Instead, it gives you low-level utility classes that you can combine to create any design.</p><h2>Key Concepts</h2><p>To master Tailwind CSS, you need to understand these key concepts:</p><ol><li>Utility Classes</li><li>Responsive Design</li><li>Customization</li><li>Plugins</li></ol><p>By leveraging these concepts, you can create highly customized, responsive designs with minimal CSS.</p>',
      image: '/tailwinscss.png',
    },
    {
      slug: 'react-state-management',
      title: 'React State Management',
      excerpt: 'Explore different state management solutions in React',
      content: '<p>State management is a crucial aspect of building complex React applications. As your app grows, managing state becomes more challenging. In this post, we\'ll explore different state management solutions in React.</p><h2>Popular State Management Solutions</h2><ul><li>React Context API</li><li>Redux</li><li>MobX</li><li>Recoil</li><li>Jotai</li></ul><p>Each of these solutions has its own strengths and use cases. We\'ll dive into when and why you might choose one over the others.</p>',
      image: '/react.jpg',
    },
  ]
  
  export function getBlogPosts(): BlogPost[] {
    return blogPosts
  }
  
  export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug)
  }
  
  