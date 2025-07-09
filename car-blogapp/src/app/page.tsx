import CarPostCard from '@/components/CarPostCard';
import CategorySection from '@/components/CategorySection';
import HeroSection from '@/components/HeroSection';
import Testimonial from '@/components/Testimonial';
import TrendingBlogs from '@/components/TrendingBlogs';

async function getPosts() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return posts.slice(0, 4).map((post: any) => {
    const author = users.find((u: any) => u.id === post.userId);
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
      author: author?.name || 'Unknown',
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
