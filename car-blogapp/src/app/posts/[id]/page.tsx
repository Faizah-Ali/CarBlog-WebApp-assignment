import Image from 'next/image';
import styles from '@/styles/PostDetail.module.css';
import CategorySection from '@/components/CategorySection';

async function getPost(id: string) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(res => res.json());

  return {
    ...post,
    author: user?.name || 'Unknown',
    date: 'Jan 10, 2024',
    time: '3 Min Read',
    imageUrl: `https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&height=600&width=1200&fit=bounds`
  };
}

// ✅ DO NOT use `PageProps`, `GetStaticPropsContext`, or external types.
// ✅ Just simple destructuring for `params`
export default async function Page({ params }: any) {
  const post = await getPost(params.id);

  return (
    <div className={styles.wrapper}>
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={1140}
        height={600}
        className={styles.coverImage}
        priority
      />

      <h1 className={styles.heading}>{post.title}</h1>

      <div className={styles.meta}>
        <p><strong>{post.author}</strong> &nbsp;|&nbsp; {post.date} &nbsp;|&nbsp; {post.time}</p>
      </div>

      <div className={styles.content}>
        <h2>Innovations in Automotive Engineering</h2>
        <p>
          The auto industry constantly evolves, driven by tech, environment, and consumer demands...
        </p>
      </div>

      <CategorySection />
    </div>
  );
}
