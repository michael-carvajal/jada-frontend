import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { FaBars } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

import { useRouter, usePathname } from 'next/navigation'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/booking', label: 'Book Jada' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

const MobileNavbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='md:hidden bg-jada-green-500 px-4 flex items-center justify-between h-20 shadow'>
      <Logo src='/Logo-item.png' alt='logo' />

      <div
      className={`absolute ${isMenuOpen ? 'top-[6rem]' : 'top-[-100vh]'} transition-top duration-500 ease-in-out px-3 py-2 w-full left-0 bg-jada-green-400 shadow`}
    >
        <ul className='flex flex-col gap-10 text-jada-purple '>
          {menuItems.map((item) => (
            <div onClick={closeMenu}>
              <MenuItem key={item.href} href={item.href} label={item.label}  isActive={pathname === item.href}/>
            </div>
          ))}
        </ul>
      </div>

      <div className='z-50'>
        <button className='text-jada-purple-800'>
          {isMenuOpen ? (
            <IoCloseOutline
              className='cursor-pointer  md:hidden'
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className=' cursor-pointer md:hidden'
              onClick={toggleMenu}
            />
          )}
        </button>
      </div>
    </nav>
  )
}

export default MobileNavbar