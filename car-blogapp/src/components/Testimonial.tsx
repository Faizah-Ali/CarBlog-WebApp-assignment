"use client"; 

import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Testimonial.module.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  avatar: string; 
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "This blog has completely transformed my understanding of the automotive world. The articles are incredibly insightful, well-researched, and cover a wide range of topics from cutting-edge electric vehicle technology to the timeless appeal of classic cars. A must-read for any car enthusiast!",
    author: "Anya Sharma",
    location: "New York, USA",
    avatar: "/TestimonialUser.png", 
  },
  {
    id: 2,
    text: "I used to find car reviews daunting, but this blog makes everything so clear and engaging. The detailed breakdowns and practical advice helped me make an informed decision on my last car purchase. Highly recommended for both seasoned drivers and newcomers!",
    author: "Marcus Bell",
    location: "Los Angeles, USA",
    avatar: "/Testimonial1.png", 
  },  
  {
    id: 3,
    text: "As someone passionate about sustainable transport, I appreciate the deep dives into EV advancements and environmental impact. It's refreshing to see a blog that combines passion for cars with a focus on future-forward mobility solutions. Keep up the fantastic work!",
    author: "Chloe Nguyen",
    location: "London, UK",
    avatar: "/Testimonial2.png", 
  },
  {
    id: 4,
    text: "The 'Classic Cars Reimagined' series is my favorite! It perfectly blends nostalgia with modern innovation. This blog truly celebrates the art and engineering of automobiles in a way that resonates with me. Great content and excellent writing!",
    author: "David Kim",
    location: "Sydney, Australia",
    avatar: "/TestimonialUser.png", 
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.leftColumn}>
        <p className={styles.subheading}>TESTIMONIALS</p>
        <h2 className={styles.heading}>What people say about our blog</h2>
        <p className={styles.description}>
          Discover why our readers trust us for the latest insights, in-depth reviews, and passionate discussions on all things automotive.
        </p>
      </div>

      <div className={styles.rightColumn}>
        <p key={currentTestimonial.id} className={styles.testimonialText}> {/* key is used for smooth transition */}
          {currentTestimonial.text}
        </p>
        <div className={styles.authorContainer}>
          <Image
            src={currentTestimonial.avatar}
            alt={currentTestimonial.author}
            width={60}
            height={60}
            className={styles.authorAvatar}
          />
          <div className={styles.authorInfo}>
            <p className={styles.authorName}>{currentTestimonial.author}</p>
            <p className={styles.authorLocation}>{currentTestimonial.location}</p>
          </div>
        </div>
        <div className={styles.navigationButtons}>
          <button onClick={handlePrev} className={styles.navButton}>
            <span className={styles.navArrow}>&#8592;</span> 
          </button>
          <button onClick={handleNext} className={`${styles.navButton} ${styles.active}`}> 
            <span className={styles.navArrow}>&#8594;</span> 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;