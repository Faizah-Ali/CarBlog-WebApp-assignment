// src/components/Footer.tsx
import styles from '@/styles/Footer.module.css';
import Image from 'next/image'; // This import is correctly present and will now be used

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <div className={styles.logoCircle}>
              {/* Replaced <img> with <Image /> and added width, height */}
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={60} // <--- Set width based on Footer.module.css
                height={55} // <--- Set height based on Footer.module.css
              />
            </div>
            <span><b><i>REGAL RIDES</i></b></span>
          </div>

          <ul className={styles.links}>
            <li>Home</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h2>Subscribe to our news letter to get latest updates and news</h2>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="example@email.com" />
            <button>Subscribe 🚀</button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Finstreet 118 2561 abctown</p>
          <p>example@email.com 001 21345 442</p>
          <div className={styles.socials}>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>🔗</span>
          </div>
        </div>
      </div>
    </footer>
  );
}