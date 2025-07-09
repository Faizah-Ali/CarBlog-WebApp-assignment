'use client'

import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'; // Correct import for the Image component

export default function Header() {
   const pathname = usePathname()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.circle}>
            <img
              src="/logo.png" // This path means the file MUST be in your /public folder
              alt="Company Logo" // Always provide a meaningful alt text for accessibilit
            />
          </div>
          <span><b><i>REGAL RIDES</i></b></span>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}> {/* Check if current path is '/' */}
            Home
          </Link>
          <Link href="/blog" className={pathname.startsWith('/blog') ? styles.active : ''}> {/* Check if path starts with '/blog' for blog sub-pages */}
            Blog
          </Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}> {/* Check if current path is '/about' */}
            About us
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}> {/* Check if current path is '/contact' */}
            Contact us
          </Link>
          <Link href="/privacy" className={pathname === '/privacy' ? styles.active : ''}> {/* Check if current path is '/privacy' */}
            Privacy Policy
          </Link>
        </nav>
        <button className={styles.subscribe}>Subscribe</button>
      </div>
    </header>
  )
}