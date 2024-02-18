'use client';

import React from 'react';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '../components/Button'
import Sidebar from './components/Sidebar'


const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} flex min-h-screen bg-gray-100`}>
    <div className="w-64 bg-gray-100 sticky top-0 h-screen"> {/* Adjusted sidebar styles */}
      <Sidebar />
    </div>
    <div className="flex-1 p-4 overflow-auto"> {/* Main content container */}
      <div className="max-w-7xl mx-auto bg-gray-100"> {/* Centered container with max-width */}
        {children}
      </div>
    </div>
  </div>
  );
}