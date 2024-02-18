'use client'
import React from 'react';
import SidebarItem from './SidebarItem';
import Button from '../../components/Button';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/dashboard', label: 'Home Page' },
  { href: '/dashboard/about', label: 'About Page' },
  { href: '/dashboard/contact', label: 'Contact Page' },
  { href: '/dashboard/services', label: 'Services Page' },
  { href: '/dashboard/resources', label: 'Resources Page' },
  { href: '/dashboard/faq', label: 'FAQ Page' },
  { href: '/dashboard/testimonials', label: 'Testimonials Page' },
  { href: '/dashboard/upload', label: 'Image & Logo Upload' },
  { href: '/dashboard/profile', label: 'Change Email / Password' },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const handleSignOut = async () => {
   
  };
  

  return (
    <div className="flex flex-col w-64 bg-white shadow-md h-screen">
      <nav className="flex-1 p-4 overflow-y-auto">
        {links.map((link, index) => (
          <SidebarItem key={index} href={link.href} label={link.label} isActive={pathname === link.href} />
        ))}
      </nav>
      {/* Spacer to push the sign-out button to the bottom */}
      <div className="mt-auto mb-10 px-4 w-full">
        <Button
          text="Sign Out"
          additionalClasses="w-full" 
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};


export default Sidebar;
