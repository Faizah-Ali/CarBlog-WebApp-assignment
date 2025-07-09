// src/components/BlogListCard.tsx
import Link from 'next/link';
import Image from 'next/image'; // <--- Ensure this is imported
import styles from '../styles/BlogListCard.module.css';

interface BlogListCardProps {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
  time: string;
  imageUrl: string;
}

export default function BlogListCard({ id, title, body, author, date, time, imageUrl }: BlogListCardProps) {
  return (
    <div className={styles.card}>
      {/* Updated <Image /> with dimensions from CSS */}
      <Image
        src={imageUrl}
        className={styles.image}
        alt={title}
        width={220} // <--- Set width based on BlogListCard.module.css
        height={225} // <--- Set height based on BlogListCard.module.css
        // objectFit="cover" is applied via className={styles.image}
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{body.slice(0, 140)}...</p>
        <div className={styles.meta}>
          <i><span>By {author}</span> <br/><span>{date} · {time}</span></i>
        </div>
        <Link href={`/posts/${id}`} className={styles.button}>Read full article...</Link>
      </div>
    </div>
  );
}