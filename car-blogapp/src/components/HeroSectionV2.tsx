'use client'; 
import Image from 'next/image';
import styles from '@/styles/HeroSectionV2.module.css'; 
import Link from 'next/link'
export default function HeroSectionV2() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
            Your Journey<br />
            Your Car<br />
            Your Way
          </h1>
          <p className={styles.description}>
            Discover an unparalleled selection of vehicles tailored to your every need and desire.
            From sleek sports cars to spacious SUVs, we provide the ultimate driving experience,
            ensuring comfort, style, and performance on every road.
          </p>
           <Link href="#footer-subscribe" >
          <button className={styles.subscribeButton}>
            Subscribe
            <span className={styles.arrowIcon}></span>
          </button>
          </Link>
        </div>

        <div className={styles.rightColumn}>
         
          <Image
            src="/HeroSectionV2-1.png"
            alt="Silver car on road"
            width={280}
            height={200}
            className={`${styles.collageImage} ${styles.image1}`}
            priority 
          />
         
          <Image
            src="/HeroSectionV2-3.png"
            alt="Yellow sports car"
            width={250}
            height={350}
            className={`${styles.collageImage} ${styles.image2}`}
          />
          
          <Image
            src="/HeroSectionV2-2.png"
            alt="Hands on steering wheel"
            width={200}
            height={150}
            className={`${styles.collageImage} ${styles.image3}`}
          />
          
          <Image
            src="/HeroSectionV2-4.png"
            alt="Dark classic car"
            width={220}
            height={280}
            className={`${styles.collageImage} ${styles.image4}`}
          />
        </div>
      </div>
    </section>
  );
}