import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'

// These styles apply to every route in the application
import './globals.css'

const inter = Inter({ subsets: ['latin'] })



export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={'${inter.className}'}>
        <header>
          <Navbar />
        </header>
        <div>
          {children}
        </div>  
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
