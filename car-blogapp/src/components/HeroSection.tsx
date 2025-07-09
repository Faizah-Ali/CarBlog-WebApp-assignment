import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <Image
        src="/HeroSection.png" // Path to your image in the public folder
        alt="Luxury Cars Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className={styles.backgroundImage}
      />
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.content}>
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
        <button className={styles.subscribeButton}>
          Subscribe
          <span className={styles.arrowIcon}></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;