// components/CarPostCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/CarPostCard.module.css'

interface Post {
  id: number
  title: string
  body: string
  author: string
  imageUrl: string
}

interface CarPostCardProps {
  posts: Post[]
}

export default function CarPostCard({ posts }: CarPostCardProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>New Technology</h2>
        <Link href="/blogs" className={styles.seeAllLink}>
          See All →
        </Link>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={300}
              height={200}
              className={styles.thumbnail}
            />
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>
                <Link href={`/TechnologyPost/${post.id}`}>{post.title}</Link>
              </h3>
              <p className={styles.description}>{post.body.slice(0, 100)}...</p>
              <p className={styles.author}>By {post.author}</p>
              <Link href={`/posts/${post.id}`} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
