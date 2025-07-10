'use client';

import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    toast.success('Subscribed successfully! 🚀');
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
     <ToastContainer position="top-center" />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <div className={styles.logoCircle}>
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={60}
                height={55}
              />
            </div>
            <span>
              <b>
                <i>REGAL RIDES</i>
              </b>
            </span>
          </div>

          <ul className={styles.links}>
            <li>
              <Link href="/" className={pathname === '/' ? styles.active : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={pathname.startsWith('/blogs') ? styles.active : ''}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === '/about' ? styles.active : ''}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === '/contact' ? styles.active : ''}
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className={pathname === '/privacy-policy' ? styles.active : ''}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h2>Subscribe to our news letter to get latest updates and news</h2>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>Developed By Faizah Ali</p>
          <p>faizah.Ali@appinventiv.com</p>
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
