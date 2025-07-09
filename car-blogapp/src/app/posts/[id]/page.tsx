import styles from '@/styles/PostDetail.module.css'
import CategorySection from '@/components/CategorySection'

interface PostDetailProps {
  params: {
    id: string
  }
}

async function getPost(id: string) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(res => res.json())

  return {
    ...post,
    author: user?.name || 'Unknown',
    date: 'Jan 10, 2024',
    time: '3 Min Read',
    imageUrl: `https://source.unsplash.com/800x400/?car&sig=${id}`
  }
}

export default async function PostDetail({ params }: PostDetailProps) {
  const post = await getPost(params.id)

  return (
    <div className={styles.wrapper}>
      <img src={post.imageUrl} className={styles.coverImage} alt={post.title} />

      <h1 className={styles.heading}>{post.title}</h1>

      <div className={styles.meta}>
        <p><strong>{post.author}</strong> &nbsp;|&nbsp; {post.date} &nbsp;|&nbsp; {post.time}</p>
      </div>

      <div className={styles.content}>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p>{post.body.repeat(2)}</p>

        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
        <p>{post.body.repeat(2)}</p>

        <ul>
          <li><strong>Lorem ipsum dolor sit amet</strong></li>
          <li>Non blandit massa enim nec scelerisque</li>
          <li>Neque egestas congue quisque egestas</li>
        </ul>
      </div>

      <CategorySection />
    </div>
  )
}
