<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>README - Regal Rides</title>
  
</head>
<body>

  <h1>🚘 Regal Rides – Car Blog & Info Hub</h1>

  <p><strong>Regal Rides</strong> is a modern car blogging platform built using <strong>Next.js (App Router)</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and modular CSS. It features dynamic blogs, contact form, category-wise car knowledge cards, and is fully responsive.</p>

  <p><strong>🌐 Live URL:</strong> <a href="https://regal-rides-brown.vercel.app/" target="_blank">https://regal-rides-brown.vercel.app/</a></p>

  <h2>📁 Folder Structure</h2>

  <pre><code>
car-blogapp/
│
├── public/
│   ├── logo.png
│   ├── CategorySection1.png
│   ├── CategorySection2.png
│   ├── CategorySection3.png
│   ├── CategorySection4.png
│   ├── HeroSection.png
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blogs/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── posts/[id]/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx (home)
│   │
│   ├── components/
│   │   ├── BlogListCard.tsx
│   │   ├── CarPostCard.tsx
│   │   ├── CategorySection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HeroSectionV2.tsx
│   │   ├── Testimonial.tsx
│   │   └── TrendingBlogs.tsx
│   │
│   ├── styles/
│       ├── Header.module.css
│       ├── Footer.module.css
│       ├── category.module.css
│       ├── contact.module.css
│       └── PostDetail.module.css
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
└── README.md
</code></pre>

  <h2>🛠️ Tech Stack Used</h2>
  <ul>
    <li><strong>Next.js (App Router)</strong></li>
    <li><strong>TypeScript</strong></li>
    <li><strong>Tailwind CSS</strong> + custom CSS modules</li>
    <li><strong>react-toastify</strong> for notifications</li>
    <li><strong>Dynamic Routing</strong> for blog details</li>
    <li><strong>Responsive Design</strong></li>
  </ul>

  <h2>📌 Features</h2>

  <h3>✅ Home Page</h3>
  <ul>
    <li>Hero Section with background image</li>
    <li>Intro about the blog</li>
    <li>Trending blogs & testimonials</li>
    <li>Category cards</li>
  </ul>
  <img src="/HeroSection.png" alt="Hero Section"/>

  <h3>✅ Blog Section</h3>
  <ul>
    <li>Page: <code>/blogs</code></li>
    <li>Displays list of blogs fetched from API</li>
    <li>Each card opens a dynamic route: <code>/posts/[id]</code></li>
  </ul>

  <h3>✅ Blog Detail Page</h3>
  <ul>
    <li>Path: <code>/posts/[id]</code></li>
    <li>Dynamic rendering of title, author, body</li>
    <li>Uses <code>getPost</code> and <code>getUser</code> functions</li>
  </ul>

  <h3>✅ Contact Page</h3>
  <ul>
    <li>Form with fields: First Name, Last Name, Phone, Email, Message</li>
    <li>Validation applied to each field</li>
    <li>Simulates API request and displays toast notification</li>
  </ul>

  <h3>✅ Category Section with Pop-up</h3>
  <ul>
    <li>Each category card opens a modal popup</li>
    <li>Modal includes: image, name, and <code>moreInfo</code> content</li>
    <li>Close button to dismiss modal</li>
  </ul>
  <img src="/CategorySection1.png" alt="Category Card Example"/>

  <h3>✅ Footer Section</h3>
  <ul>
    <li>Logo and navigation links</li>
    <li>Email subscription form</li>
    <li>On subscribe button click, toast message appears</li>
  </ul>

  <h3>✅ Header</h3>
  <ul>
    <li>Navigation links with active class</li>
    <li>Responsive layout:
      <ul>
        <li>Desktop: horizontal nav</li>
        <li>Mobile: styled as fixed bottom bar (like native apps)</li>
      </ul>
    </li>
  </ul>

  <h2>📦 Installation Steps</h2>

  <ol>
    <li>Clone the project:
      <pre><code>git clone https://github.com/yourusername/car-blogapp</code></pre>
    </li>
    <li>Navigate into the project folder:
      <pre><code>cd car-blogapp</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Run development server:
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Visit <code>http://localhost:3000</code> in browser.</li>
  </ol>

  <h2>📢 Toast Notifications</h2>
  <ul>
    <li>Used in:
      <ul>
        <li>Contact form submission</li>
        <li>Newsletter subscribe button</li>
      </ul>
    </li>
    <li>Positioned at: <code>top-center</code></li>
  </ul>

  <h2>💡 Modal Logic (Category Section)</h2>
  <ul>
    <li><code>useState</code> tracks selected category</li>
    <li>Click opens modal with that category’s image and description</li>
    <li>Details are stored in <code>moreInfo</code> field of each card object</li>
    <li>Close button dismisses modal</li>
  </ul>

  <h2>🚀 Deployment</h2>
  <ul>
    <li>Deployed on <strong>Vercel</strong></li>
    <li><strong>Live URL:</strong> <a href="https://regal-rides-brown.vercel.app/" target="_blank">https://regal-rides-brown.vercel.app/</a></li>
  </ul>

  <h2>🧠 Beginner Tips</h2>
  <ul>
    <li>Start from <code>src/app/page.tsx</code> to understand routing</li>
    <li>Each page has its own folder inside <code>/app</code> as per Next.js 14 routing</li>
    <li>All reusable UI components live in <code>src/components/</code></li>
    <li>Each CSS Module matches the component (e.g. <code>Header.tsx</code> ↔ <code>Header.module.css</code>)</li>
    <li>Public assets like images go in <code>/public</code></li>
  </ul>

  <h2>📄 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>.</p>

</body>
</html>
