import styles from '@/styles/about.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About CarBlog</h1>

      <p>
        🚘 CarBlog is your go-to destination for the latest updates in the world of cars. From electric vehicles to classic reviews, we bring valuable insights to car lovers.
      </p>

      <h2 className={styles.sectionTitle}>📚 What We Cover:</h2>
      <ul className={styles.sectionList}>
        <li>Electric Vehicle Reviews</li>
        <li>SUV & Luxury Car Comparisons</li>
        <li>Car Maintenance Tips</li>
        <li>Driving Tips & Safety Guides</li>
      </ul>

      <h2 className={styles.sectionTitle}>🛠️ Tech Stack Used:</h2>
      <ul className={styles.sectionList}>
        <li>Next.js (App Router)</li>
        <li>React & TypeScript</li>
        <li>CSS Modules for styling</li>
        <li>Static Site Generation (SSG)</li>
        <li>Fake API via JSONPlaceholder</li>
      </ul>
    </div>
  )
}
