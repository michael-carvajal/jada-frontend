'use client';
import React from "react";
import Image from "next/image";
import HeroCard from './components/HeroCard';
import { usePathname } from 'next/navigation';


export default function Page() {
  const pathname = usePathname();
  return (
    <main className=" min-h-screen p-8">
     {pathname === '/' && (
        <HeroCard
          imageUrl="/path-to-image.jpg"
          imageAlt="Image Description"
          title="Hero Title"
          subtitle="Hero Subtitle"
          body="Hero body text"
        />
      )}
      {/* ... other components */}
    </main>
  );
}