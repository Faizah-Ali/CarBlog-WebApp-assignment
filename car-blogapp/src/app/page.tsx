// src/app/page.tsx
import CarPostCard from '@/components/CarPostCard';
import CategorySection from '@/components/CategorySection';
import HeroSection from '@/components/HeroSection';
import Testimonial from '@/components/Testimonial';
import TrendingBlogs from '@/components/TrendingBlogs';

// Define interfaces for the data fetched from JSONPlaceholder
interface Post {
  id: number;
  userId: number; // Important for linking to users
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  // You might add other user properties if you use them, e.g., email, username
}

// Define the structure of the enriched post data that CarPostCard expects
interface EnrichedPost {
  id: number;
  title: string;
  body: string;
  author: string;
  imageUrl: string;
}

async function getPosts(): Promise<EnrichedPost[]> { // Explicitly define return type
  // Use specific types instead of 'any'
  const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
  const users: User[] = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return posts.slice(0, 4).map((post: Post) => { // Specify 'post' as Post type
    const author = users.find((user: User) => user.id === post.userId); // Specify 'user' as User type
    let imageUrl = '';

    if (post.id === 1) imageUrl = '/TrendingBlogs4.png';
    else if (post.id === 2) imageUrl = '/TrendingBlogs1.webp';
    else if (post.id === 3) imageUrl = '/TrendingBlogs2.jpg';
    else if (post.id === 4) imageUrl = '/TrendingBlogs3.jpg';
    else imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXowz1FO0-jzxik-RtD5SLyIb_w713QdyCGw&s';

    return {
      id: post.id,
      title: post.title,
      body: post.body,
      author: author?.name || 'Unknown', // Safely access author name
      imageUrl
    };
  });
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <HeroSection />
      <div id='trending'>
        <TrendingBlogs />
      </div>

      <CategorySection />
      <Testimonial />

      {/* Pass posts array as props */}
      <CarPostCard posts={posts} />
    </>
  );
}