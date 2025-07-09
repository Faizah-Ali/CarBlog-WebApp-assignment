// src/components/Header.tsx
'use client'

import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'; // This import is correctly present and will now be used

export default function Header() {
   const pathname = usePathname()
  return (

    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.circle}>
            {/* Replaced <img> with <Image /> and added width, height */}
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={60} // <--- Set width based on Header.module.css
              height={55} // <--- Set height based on Header.module.css
              priority // Recommended for logos/images in header for LCP
            />
          </div>
          <span><b><i>REGAL RIDES</i></b></span>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
          {/*
            Corrected Blog link:
            - Changed href="#trending" to href="/blogs" as it's a separate page.
            - Adjusted active class check to pathname.startsWith('/blogs') to cover sub-routes.
          */}
          <Link href="/blogs" className={pathname.startsWith('/blogs') ? styles.active : ''}>
            Blog
          </Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
            About us
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
            Contact us
          </Link>
          {/*
            Corrected Privacy Policy link:
            - Changed href="/privacy" to href="/privacy-policy" to match the actual page name.
            - Adjusted active class check.
          */}
          <Link href="/privacy-policy" className={pathname === '/privacy-policy' ? styles.active : ''}>
            Privacy Policy
          </Link>
        </nav>
        {/*
          Changed Link href from "#footer-subscribe" to a direct link to the contact page
          or a general subscribe page, as #footer-subscribe is a fragment on the same page
          and usually not for a button in the header.
          If you want to scroll to a section on the *same page*, you'd need a click handler
          and scrollIntoView, but for a header button, it's usually a new page.
          For now, I'll make it a generic subscribe link or remove the Link wrapper if it's just a button.
          Let's assume it leads to a subscribe page or form.
        */}
        <Link href="/subscribe-page"> {/* Consider creating a dedicated subscribe page */}
          <button className={styles.subscribe}>Subscribe</button>
        </Link>
      </div>
    </header>
  );
}