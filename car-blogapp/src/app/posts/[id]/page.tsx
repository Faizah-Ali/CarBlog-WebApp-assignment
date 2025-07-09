import Image from 'next/image';
import styles from '@/styles/PostDetail.module.css';
import CategorySection from '@/components/CategorySection';

// ✅ Type for params
type Props = {
  params: Promise<{ id: string }>; // params is async
};

// ✅ Post structure
type PostData = {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
  time: string;
  imageUrl: string;
};

// ✅ Get post data
async function getPost(id: string): Promise<PostData> {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(res => res.json());

  return {
    ...post,
    author: user?.name || 'Unknown',
    date: 'Jan 10, 2024',
    time: '3 Min Read',
    imageUrl:
      'https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&height=600&width=1200&fit=bounds',
  };
}

// ✅ This function runs on the server (static/dynamic rendering)
export default async function Page({ params }: Props) {
  const resolvedParams = await params; // ✅ await the params object
  const post = await getPost(resolvedParams.id);

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
        <p>
          <strong>{post.author}</strong> &nbsp;|&nbsp; {post.date} &nbsp;|&nbsp; {post.time}
        </p>
      </div>

      <div className={styles.content}>
        <h2>Innovations in Automotive Engineering</h2>
        <p>
          The auto industry constantly evolves, driven by tech, environment, and consumer demands. This article explores next-gen vehicles, from electric powertrains to advanced autonomous systems. We examine how AI, sensors, and real-time data redefine driving.
        </p>
        <p>
          Beyond performance, connectivity and user experience are key. Modern cars are smart, networked hubs integrating seamlessly with digital lives through advanced infotainment, V2X communication, and over-the-air updates, enhancing safety, convenience, and entertainment.
        </p>
        <h2>Future Roads: Sustainable Mobility & Possibilities</h2>
        <p>
          Future transport considers smart infrastructure and new ownership models. Vehicles will be interconnected ecosystem components, emphasizing sustainable materials and closed-loop manufacturing to reduce environmental impact.
        </p>
        <p>
          AI and machine learning will personalize driving, optimizing routes and predicting maintenance. Shared mobility and future concepts hint at more fluid, accessible, and eco-conscious transportation — an exciting journey of continuous breakthroughs.
        </p>

        <ul>
          <li><b>Sustainable Mobility:</b> Eco-friendly materials and energy.</li>
          <li><b>Battery Tech & Charging:</b> Increased range, faster charging.</li>
          <li><b>ADAS & Autonomous Driving:</b> AI-powered safety and self-driving progress.</li>
          <li><b>Connected Car Ecosystems:</b> Digital integration and personalized experiences.</li>
          <li><b>Urban Mobility:</b> Smart cities adapting to future transport.</li>
        </ul>
      </div>

      <CategorySection />
    </div>
  );
}
