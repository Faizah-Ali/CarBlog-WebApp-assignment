import styles from '@/styles/about.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About RegalRides</h1>

      <p className={styles.introParagraph}>
        🚘 RegalRides is your premier online destination for everything automotive. We fuel your passion with insightful articles, cutting-edge reviews, and practical guides, keeping you ahead in the fast lane of car trends.
      </p>

      <h2 className={styles.sectionTitle}>🎯 Our Mission:</h2>
      <p className={styles.sectionParagraph}>
        To empower car enthusiasts and everyday drivers with reliable, engaging, and comprehensive information that enhances their automotive journey, from purchase to maintenance and beyond.
      </p>

      <h2 className={styles.sectionTitle}>💡 Why RegalRides?</h2>
      <ul className={styles.sectionList}>
        <li><b>Expert Insights:</b> Deep dives into automotive trends and technology.</li>
        <li><b>Diverse Topics:</b>Covering everything from electric vehicles to classic car care.</li>
        <li><b>Reliable Information:</b>Fact-checked content for informed decisions.</li>
        <li><b>Community Focused:</b>Connecting car lovers worldwide.</li>
      </ul>

      <h2 className={styles.sectionTitle}>📚 What We Cover:</h2>
      <ul className={styles.sectionList}>
        <li>Electric Vehicle Reviews & Future Tech</li>
        <li>SUV & Luxury Car Comparisons</li>
        <li>Essential Car Maintenance Tips</li>
        <li>Driving Safety Guides & Best Practices</li>
      </ul>

      <h2 className={styles.sectionTitle}>🛠️ Tech Stack Used:</h2>
      <ul className={styles.sectionList}>
        <li>Next.js (App Router) for robust routing</li>
        <li>React & TypeScript for dynamic UI</li>
        <li>CSS Modules for scoped styling</li>
        <li>Static Site Generation (SSG) for performance</li>
        <li>Fake API via JSONPlaceholder for data prototyping</li>
      </ul>
    </div>
  )
}