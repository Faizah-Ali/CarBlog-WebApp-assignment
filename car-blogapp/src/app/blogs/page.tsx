import BlogListCard from '@/components/BlogListCard'

async function getAllPosts() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

  return posts.map((post: any) => {
    const author = users.find((u: any) => u.id === post.userId)
    return {
      id: post.id,
      title: post.title,
      body: post.body,
      author: author?.name || 'Unknown',
      date: 'Jan 10, 2024',
      time: '3 Min Read',
      imageUrl: `https://source.unsplash.com/600x400/?car&sig=${post.id}`
    }
  })
}

export default async function blogs() {
  const posts = await getAllPosts()

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>All Posts</h1>
      {posts.map(post => (
        <BlogListCard key={post.id} {...post} />
      ))}
    </main>
  )
}
