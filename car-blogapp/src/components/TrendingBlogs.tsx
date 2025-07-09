"use client";
import Image from 'next/image';
import { useState } from 'react'; 
import styles from '@/styles/TrendingBlogs.module.css';

interface BlogPostData {
  id: string; 
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}


const allBlogPosts: BlogPostData[] = [
  {
    id: 'latest-car-tech',
    author: 'Anya Sharma',
    date: 'March 12, 2024',
    title: 'Unlocking the Future of Driving: Electric Vehicles Explained',
    description: "The automotive industry is undergoing a monumental shift towards electrification. Electric vehicles (EVs) are no longer a niche market but a rapidly growing segment, promising a sustainable and high-performance alternative to traditional gasoline cars. From their quiet operation to instant torque, EVs offer a unique driving experience. This article delves into the technology, benefits, and future of electric mobility, exploring how these innovative machines are reshaping our roads and environment.",
    imageUrl: '/TrendingBlogs3.jpg', 
  },
  {
    id: 'autonomous-driving',
    author: 'Marcus Bell',
    date: 'Aug 23, 2023',
    title: 'The Rise of Autonomous Driving: What to Expect Next',
    description: "Autonomous driving technology is rapidly evolving, promising a future where cars can navigate without human intervention. This blog explores the different levels of autonomy, the challenges of widespread adoption, and the potential impact on urban planning and personal freedom. Are we ready for self-driving cars on every road? Find out the latest breakthroughs and what's still needed to make fully autonomous vehicles a reality.",
    imageUrl: '/TrendingBlogs4.png', 
  },
  {
    id: 'compact-cars',
    author: 'Chloe Nguyen',
    date: 'Aug 23, 2023',
    title: 'Navigating Urban Jungles: Best Compact Cars for City Life',
    description: "City driving presents unique challenges: tight parking, congested streets, and the need for efficiency. This article highlights the top compact cars designed to thrive in urban environments. We'll compare their maneuverability, fuel economy, and smart features that make city commuting a breeze. Discover which small car punches above its weight in the urban jungle.",
    imageUrl: '/TrendingBlogs1.webp', 
  },
  {
    id: 'classic-cars-tech',
    author: 'David Kim',
    date: 'Aug 23, 2023',
    title: 'Classic Cars Reimagined: Modern Tech in Vintage Bodies',
    description: "The allure of classic cars is undeniable, but modern convenience is often missed. Enter the world of 'restomods' – vintage vehicles upgraded with contemporary technology. From electric conversions to infotainment systems discreetly integrated into a retro dash, this trend brings the best of both worlds. Explore how enthusiasts are blending the timeless appeal of classics with the reliability and features of today's automobiles.",
    imageUrl: '/TrendingBlogs2.jpg', 
  },
  {
    id: 'road-trip-planner',
    author: 'Isabella Garcia',
    date: 'Aug 23, 2023',
    title: 'The Ultimate Road Trip Planner: Tips and Tricks',
    description: "Embarking on a road trip is an adventure, but proper planning can make it unforgettable. This comprehensive guide provides essential tips for preparing your vehicle, packing smart, finding the best routes, and staying safe on the open road. Whether you're planning a weekend getaway or a cross-country journey, learn how to maximize fun and minimize stress for your next automotive adventure.",
    imageUrl: '/TrendingBlogs5.png', 
  },
];

// Reusable BlogPost component (now for both latest and trending lists)
const BlogPostItem: React.FC<BlogPostData & { onClick?: (id: string) => void; isActive?: boolean }> = ({
  id,
  author,
  date,
  title,
  description,
  imageUrl,
  onClick,
  isActive,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div
      className={`${styles.trendingPost} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <p className={styles.trendingPostMeta}>
        By {author} | {date}
      </p>
      <h3 className={styles.trendingPostTitle}>{title}</h3>
      {/* Description and Image are conditionally rendered here only for the main 'latest' display */}
      {description && !isActive && ( // Don't show description in the trending list
        <p className={styles.latestPostDescription}>{description}</p>
      )}
      {imageUrl && !isActive && ( // Don't show image in the trending list
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={350}
          className={styles.latestPostImage}
        />
      )}
    </div>
  );
};

const TrendingBlogs: React.FC = () => {
  // State to manage the currently displayed "latest" blog
  const [currentLatestBlog, setCurrentLatestBlog] = useState<BlogPostData>(allBlogPosts[0]); // Initialize with the first blog

  // State to manage which trending blog is "active" (clicked)
  const [activeTrendingId, setActiveTrendingId] = useState<string | null>(null);

  const handleTrendingClick = (blogId: string) => {
    const selectedBlog = allBlogPosts.find(blog => blog.id === blogId);
    if (selectedBlog) {
      setCurrentLatestBlog(selectedBlog);
      setActiveTrendingId(blogId); // Set the active ID for styling
    }
  };

  return (
    <section className={styles.trendingBlogsContainer}>
      {/* Latest Blog Post Section - Now dynamic */}
      <div className={styles.latestBlog}>
        <h2 className={styles.sectionTitle}>Latest</h2>
        <Image
          src={currentLatestBlog.imageUrl}
          alt={currentLatestBlog.title}
          width={600}
          height={350}
          className={styles.latestPostImage}
        />
        <p className={styles.postMeta}>
          By {currentLatestBlog.author} | {currentLatestBlog.date}
        </p>
        <h3 className={styles.latestPostTitle}>{currentLatestBlog.title}</h3>
        <p className={styles.latestPostDescription}>
          {currentLatestBlog.description}
        </p>
        
      </div>

      {/* Trending Blogs Section */}
      <div className={styles.trendingSidebar}>
        <div className={styles.trendingHeader}>
          <h2 className={styles.trendingTitle}>Trending Blogs</h2>
          
        </div>

        {allBlogPosts.map((blog) => (
          
          <BlogPostItem
            key={blog.id}
            {...blog}
            onClick={handleTrendingClick}
           
            isActive={activeTrendingId === blog.id || (activeTrendingId === null && blog.id === currentLatestBlog.id)}
        
           imageUrl={blog.imageUrl || "/HeroSection.png"} // 👈 your default image path
description={blog.description || "No description available"}

          />
        ))}
      </div>
    </section>
  );
};

export default TrendingBlogs;