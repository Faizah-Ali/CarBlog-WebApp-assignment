// src/components/CategorySection.tsx
import styles from '../styles/category.module.css';
import Image from 'next/image'; // This import is correctly present and will now be used

const categories = [
  {
    name: 'Car Reviews',
    desc: 'Get in-depth analysis and expert opinions on the latest models and classic beauties.',
    image: '/CategorySection1.png'
  },
  {
    name: 'Maintenance Tips',
    desc: 'Essential advice to keep your vehicle running smoothly and extend its lifespan.',
    image: '/CategorySection2.png'
  },
  {
    name: 'Car Modifications',
    desc: 'Explore the exciting world of aftermarket parts and performance enhancements.',
    image: '/CategorySection3.png'
  },
  {
    name: 'Driving Tips',
    desc: 'Improve your skills, ensure safety, and enjoy every moment behind the wheel.',
    image: '/CategorySection4.png'
  }
]

export default function CategorySection() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>All Category</h2>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.card}>
            {/* Replaced <img> with <Image /> and added width, height */}
            <Image
              src={cat.image}
              className={styles.image}
              alt={cat.name}
              width={70} // <--- Set width based on Category.module.css
              height={70} // <--- Set height based on Category.module.css
            />
            <h3>{cat.name}</h3>
            <p>{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}