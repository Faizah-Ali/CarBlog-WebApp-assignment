import styles from '@/styles/about.module.css'; // Assuming 'about.module.css' is the correct path for privacy-policy page styling

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>

      <p className={styles.introParagraph}>
        At CarBlog, your privacy is paramount. This Privacy Policy outlines how we collect, use, protect, and disclose your information when you visit our website.
      </p>

      <h2 className={styles.sectionTitle}>ℹ️ Information We Collect:</h2>
      <p className={styles.sectionParagraph}>
        We collect both personal and non-personal information to enhance your experience. This may include:
      </p>
      <ul className={styles.sectionList}>
        <li><b>Personal Data:</b>Name, email address (when you subscribe or comment).</li>
        <li><b>Usage Data:</b>IP address, browser type, pages visited, time spent.</li>
        <li><b>Cookies & Tracking:</b>Data collected via cookies for site functionality and analytics.</li>
      </ul>

      <h2 className={styles.sectionTitle}>⚙️ How We Use Your Information:</h2>
      <p className={styles.sectionParagraph}>
        Your data helps us to:
      </p>
      <ul className={styles.sectionList}>
        <li>Provide and maintain our service.</li>
        <li>Improve content and user experience.</li>
        <li>Communicate updates, promotions, and respond to inquiries.</li>
        <li>Monitor website usage for analytics and security.</li>
      </ul>

      <h2 className={styles.sectionTitle}>🔒 Data Security:</h2>
      <p className={styles.sectionParagraph}>
        We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption and secure servers.
      </p>

      <h2 className={styles.sectionTitle}>🌐 Third-Party Services:</h2>
      <p className={styles.sectionParagraph}>
        We may use third-party services (e.g., analytics, advertising partners) that collect information. Their use of data is governed by their own privacy policies. We do not sell your personal data.
      </p>

      <h2 className={styles.sectionTitle}>📜 Your Rights:</h2>
      <p className={styles.sectionParagraph}>
        You have rights regarding your data:
      </p>
      <ul className={styles.sectionList}>
        <li>Access, update, or delete your information.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Withdraw consent (where applicable).</li>
      </ul>

      <h2 className={styles.sectionTitle}>🔄 Changes to This Policy:</h2>
      <p className={styles.sectionParagraph} style={{ textAlign: 'center', marginTop: '3rem' }}>
        <i><b>Last Modified:</b> July 9, 2025.</i>
      </p>

      {/* This line is the focus of the error. Ensure there are no invisible characters or actual quotes. */}
      {/* It should appear exactly as below, without literal quotes around the date. */}
      <p className={styles.sectionParagraph} style={{ textAlign: 'center', marginTop: '3rem' }}>
        <i><b>Last Modified:</b> July 9, 2025.</i>
      </p>
    </div>
  );
}