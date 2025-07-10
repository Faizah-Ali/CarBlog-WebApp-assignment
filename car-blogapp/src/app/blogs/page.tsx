import BlogListCard from '@/components/BlogListCard';
import HeroSectionV2 from '@/components/HeroSectionV2'; 

//Interfaces defined- to fetch data from JSONPlaceholder
interface Post {
  id: number;
  userId: number; // Important for linking to users
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

//Enriched post data's structure defined that BlogListCard expects
interface EnrichedPost {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
  time: string;
  imageUrl: string;
}

async function getAllPosts(): Promise<EnrichedPost[]> { // Explicitly define return type
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  const users: User[] = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

  return posts.map((post: Post) => { // Specify 'post' as Post type
    const author = users.find((user: User) => user.id === post.userId); // Specify 'user' as User type
    return {
      id: post.id,
      title: post.title,
      body: post.body,
      author: author?.name || 'Unknown', 
      date: 'Jan 10, 2024',
      time: '3 Min Read',
      imageUrl: `https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&height=600&width=1200&fit=bounds`
    };
  });
}

export default async function BlogsPage() { 
  const posts = await getAllPosts();

  return (
    <>
      <HeroSectionV2/>
      <main style={{
        maxWidth: '1140px',
        margin: '1rem auto',
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#333'
        }}>All Posts</h1>
        {posts.map((post: EnrichedPost) => ( 
          <BlogListCard key={post.id} {...post} />
        ))}
      </main>
    </>
  );
}