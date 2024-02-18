'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'
import Context from './components/Context/context'
import { usePathname} from 'next/navigation'
import AdminNavbar from './components/AdminNavbar'


const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
 // const isLoggedIn = true; // Make this actually check if the user is logged in
 const isLoggedIn = () => {
  return Boolean(window.localStorage.getItem('authToken'));
};
  return (
    <Context>
      <html lang='en'>
        <body
          className={`${nunito.className} antialiased container-full mx-auto bg-jada-green-500`}
        >
          <div className={`${nunito.className} min-h-screen bg-jada-green-500`}>
  {isLoggedIn && <AdminNavbar />}
  {!pathname.startsWith('/dashboard') && <Navbar />}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
</div>

        </body>
      </html>
    </Context>
  )
}
