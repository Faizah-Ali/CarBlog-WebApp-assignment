'use client';

import { useEffect, useState, useRef } from 'react';
import BlogListCard from '@/components/BlogListCard';
import HeroSectionV2 from '@/components/HeroSectionV2';
import styles from '@/styles/BlogsPage.module.css';

// Interfaces
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

interface EnrichedPost {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
  time: string;
  imageUrl: string;
}

const POSTS_PER_PAGE = 6;

export default function BlogsPage() {
  const [posts, setPosts] = useState<EnrichedPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const blogListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const postsRes: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
      const usersRes: User[] = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

      const enriched: EnrichedPost[] = postsRes.map(post => {
        const author = usersRes.find(user => user.id === post.userId);
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

      setPosts(enriched);
    }

    fetchPosts();
  }, []);

  const scrollToBlogList = () => {
    blogListRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToBlogList();
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      scrollToBlogList();
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      scrollToBlogList();
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  return (
    <>
      <HeroSectionV2 />
      <main className={styles.mainContainer}>
        <div ref={blogListRef}>
          <h1 className={styles.pageTitle}>
            All Posts
          </h1>
          
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Blog By Title..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className={styles.searchInput}
          />

          {currentPosts.length === 0 ? (
            <p className={styles.noResult}>No matching posts found.</p>
          ) : (
            currentPosts.map((post) => (
              <BlogListCard key={post.id} {...post} />
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {currentPosts.length > 0 && (
          <div className={styles.pagination}>
            <button onClick={goToPrevious} disabled={currentPage === 1} className={styles.arrowBtn}>
              ←
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${styles.pageBtn} ${page === currentPage ? styles.activePage : ''}`}
              >
                {page}
              </button>
            ))}

            <button onClick={goToNext} disabled={currentPage === totalPages} className={styles.arrowBtn}>
              →
            </button>
          </div>
        )}
      </main>
    </>
  );
}
