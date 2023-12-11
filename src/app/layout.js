import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import SiteTheme from '@/utils/theme/SiteTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Md Jahid Hasan || MERN Stack Developer',
  description: 'This is a portfolio Site of a mern stack developer who is known as Md jahid Hasan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
    <SiteTheme>
    <NavBar></NavBar>
    </SiteTheme>
        {children}
   
        
        </body>
    </html>
  )
}
