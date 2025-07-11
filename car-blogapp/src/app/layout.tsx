import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Regal Rides',
  description: 'Explore the latest in car technology, reviews, and tips.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <div id='footer-subscribe'>
        <Footer />
        </div>
      </body>
    </html>
  )
}
