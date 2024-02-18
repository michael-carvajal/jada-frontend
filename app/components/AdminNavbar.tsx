import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminNavbar = () => {
  const pathname = usePathname();
  const onDashboard = pathname.startsWith('/dashboard');

  return (
    <nav className="bg-gray-800 text-white h-6 w-full flex items-center justify-end px-4">
      {onDashboard ? (
        <Link href="/">
          <span className="text-sm">View Frontend</span>
        </Link>
      ) : (
        <Link href="/dashboard">
          <span className="text-sm">Dashboard</span>
        </Link>
      )}
    </nav>
  );
};

export default AdminNavbar;