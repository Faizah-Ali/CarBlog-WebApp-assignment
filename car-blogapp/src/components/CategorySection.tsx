'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/category.module.css';
import Image from 'next/image';

// Define an interface for your category objects
interface Category {
  name: string;
  desc: string;
  image: string;
  details: string;
  moreInfo: string;
}

const categories: Category[] = [
  {
    name: 'Car Reviews',
    desc: 'Get in-depth analysis and expert opinions on the latest models and classic beauties.',
    image: '/CategorySection1.png',
    details:
      'Car reviews help users decide the best vehicle for their needs with expert insights on performance, design, and value.',
    moreInfo:
      `Our in-depth car reviews break down the vehicle's strengths and weaknesses, comparing them with competitors in the same segment. We analyze performance, interior quality, tech features, safety ratings, and resale value. From everyday commuter sedans to high-end luxury SUVs, we provide real-world insights from test drives and long-term ownership. Whether you’re looking for fuel efficiency, space for your family, or a sporty drive, our reviews help match your lifestyle with the right car.`
  },
  {
    name: 'Maintenance Tips',
    desc: 'Essential advice to keep your vehicle running smoothly and extend its lifespan.',
    image: '/CategorySection2.png',
    details:
      'Maintenance tips ensure your car stays in top condition — from oil changes to tire rotations and brake inspections.',
    moreInfo:
      `Vehicle maintenance is not just about keeping your car looking clean — it's about preventing costly repairs and maximizing safety. Learn how often to replace engine oil, when to check brake pads, how to detect unusual noises, and what dashboard warnings really mean. We also cover seasonal maintenance tips like preparing for monsoons or winter driving, and how to store your car for long periods. By following these proactive steps, you can add years to your vehicle’s life and ensure it runs like new.`
  },
  {
    name: 'Car Modifications',
    desc: 'Explore the exciting world of aftermarket parts and performance enhancements.',
    image: '/CategorySection3.png',
    details:
      'From turbochargers to body kits, explore ways to enhance your car’s style, sound, and performance legally and safely.',
    moreInfo:
      `Car modifications let you personalize your ride for aesthetics, speed, comfort, or sound. We dive into popular upgrades such as performance exhaust systems, cold air intakes, ECU remaps, and suspension tuning. You’ll also learn about aesthetic enhancements like custom lighting, paint wraps, alloy wheels, spoilers, and body kits. We discuss the legalities, potential insurance impacts, and safety considerations for each mod — so you can upgrade your car responsibly and without compromise.`
  },
  {
    name: 'Driving Tips',
    desc: 'Improve your skills, ensure safety, and enjoy every moment behind the wheel.',
    image: '/CategorySection4.png',
    details:
      'Learn smart techniques for city, highway, and weather-based driving. Become a safer, more confident driver.',
    moreInfo:
      `Driving isn't just about moving from point A to B — it's about doing so smoothly, safely, and confidently. We cover everything from how to position your hands correctly on the wheel to anticipating hazards and improving fuel efficiency. Our guides include how to handle emergency braking, avoid hydroplaning in wet conditions, and deal with aggressive drivers. Whether you're stuck in city traffic or navigating mountain roads, our tips will help you maintain focus, reduce stress, and become a more mindful driver.`
  }
];

export default function CategorySection() {
  // Use the Category type for the 'selected' state. It can be null initially.
  const [selected, setSelected] = useState<Category | null>(null);

  // Use the Category type for the 'cat' parameter
  const openModal = (cat: Category) => {
    setSelected(cat);
    document.body.style.overflow = 'hidden'; // Lock scroll
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  // Close modal on Esc key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>All Category</h2>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.card} onClick={() => openModal(cat)}>
            <Image
              src={cat.image}
              className={styles.image}
              alt={cat.name}
              width={70}
              height={70}
            />
            <h3>{cat.name}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>
      {selected && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <Image
              src={selected.image}
              alt={selected.name}
              width={200}
              height={200}
              className={styles.modalImage}
            />
            <h2>{selected.name}</h2>
            <p>{selected.details}</p>
            <hr style={{ margin: '1rem 0', borderColor: '#fc4100' }} />
            <p style={{ fontSize: '0.95rem', color: '#333' }}>{selected.moreInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
}