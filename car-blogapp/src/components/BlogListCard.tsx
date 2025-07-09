import Link from 'next/link'
import styles from '../styles/BlogListCard.module.css'

interface BlogListCardProps {
  id: number
  title: string
  body: string
  author: string
  date: string
  time: string
  imageUrl: string
}

export default function BlogListCard({ id, title, body, author, date, time, imageUrl }: BlogListCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} className={styles.image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{body.slice(0, 140)}...</p>
        <div className={styles.meta}>
          <span>By {author}</span> · <span>{date} · {time}</span>
        </div>
        <Link href={`/posts/${id}`} className={styles.button}>Read full article...</Link>
      </div>
    </div>
  )
}
