import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { useContext, useEffect, useState } from "react"
import { MessageData } from './Context/context';
import { useRouter } from 'next/navigation'

interface HeroCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  body: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ imageUrl, imageAlt, title, subtitle, body }) => {
  const messageContext = useContext(MessageData);
  const { message, setMessage } = messageContext || {};
  const router = useRouter(); 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/home_page')
      const data = await response.json();
      setMessage(data.home_page[0])
    }
    fetchData()
  },[])
  const handleBookJadaClick = () => {
    router.push('/booking'); // Navigate to the booking page
  };

  const handleLearnMoreClick = () => {
    router.push('/about'); // Navigate to the about page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-4 md:mb-0">
        <Image src='/jada.png' alt={imageAlt} width={500} height={300} className="rounded-lg" />
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">{message?.site_title}</h1>
        <h2 className="text-3xl text-gray-700">{message?.site_subtitle}</h2>
        <p className="text-lg">{message?.page_text}</p>
        <div className="flex gap-4">
          {/* Use Button components and pass the click handlers */}
          <Button text="Book Jada" onClick={handleBookJadaClick} additionalClasses="w-full" />
          <button
  className="w-full rounded-md bg-white text-jada-purple-800 border-2 border-jada-purple-800 hover:bg-jada-purple-400 hover:text-jada-purple-900 hover:underline hover:decoration-dashed text-underline-offset-2px transition-colors"
  onClick={handleLearnMoreClick}
>
  Learn More
</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;