'use client'

import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'; 

export default function Header() {
   const pathname = usePathname()
  return (

    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.circle}>
          
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={60} 
              height={55} 
              priority 
            />
          </div>
          <span><b><i>REGAL RIDES</i></b></span>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
          
          <Link href="/blogs" className={pathname.startsWith('/blogs') ? styles.active : ''}>
            Blog
          </Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
            About us
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
            Contact us
          </Link>
          
          <Link href="/privacy-policy" className={pathname === '/privacy-policy' ? styles.active : ''}>
            Privacy Policy
          </Link>
        </nav>
        
        <Link href="#footer-subscribe" >
          <button className={styles.subscribe}>Subscribe</button>
        </Link>
      </div>
    </header>
  );
}