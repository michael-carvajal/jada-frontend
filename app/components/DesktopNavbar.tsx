'use client'

import Logo from './Logo' // Your Logo component
import MenuItem from './MenuItem' // Your MenuItem component
import Button from './Button' // Your Button component
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

const DesktopNavbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = (e) => {
    e.preventDefault();
    router.push('/booking')
  }

  return (
    <nav className='hidden md:flex md:flex-row bg-jada-green-500 px-4 sm:px-6 lg:px-8 items-center md:justify-between h-20 shadow-md'>
      <div className='gap-5 flex flex-row items-center'>
        <Logo src='/Logo-image.png' alt='logo' />
        <ul className='flex space-x-8'>
          {menuItems.map((item) => (
            <MenuItem key={item.href} href={item.href} label={item.label} isActive={pathname === item.href} />
            ))}
        </ul>
      </div>
      <Button text='Book Jada' onClick={handleButtonClick} />
    </nav>
  )
}

export default DesktopNavbar