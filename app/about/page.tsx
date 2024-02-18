'use client'
import React, { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import { MessageData } from '../components/Context/context';

const aboutParagraphs = [
    "Growing up as an only child with a busy single mom, I understood loneliness and made it my mission to prevent it in as many children as possible. I have been dedicated to providing love, guidance, and fun learning experiences to every child and family I work with. I'm not just a nanny; I'm a mentor, a tutor, and a friend. My motto is simple: 'You're There for Them, and I'm Here For You.'",
    ""
];

const certifications = [
    'Registered Behavorial Technician',
    'CPR Certified',
    'Certified Childcare Nanny'
];

export default function AboutPage() {
  const messageContext = useContext(MessageData);
  const { message, setMessage } = messageContext || {};

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/about_page')
      const data = await response.json();
      setMessage(data.about_pages[0]);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-8">
  <div className="max-w-2xl mx-auto">

    <h2 className="text-2xl font-bold mb-4 text-center">Certifications</h2>
    <ul className="list-disc list-inside text-lg mb-6 text-center mb-20">
      {certifications.map((cert, index) => (
        <li key={index}>{cert}</li>
      ))}
    </ul>

    <h1 className="text-4xl font-bold mb-6 text-center">About Jada</h1>
    <p className="mb-4 text-lg leading-relaxed">{message?.first_para}</p>
    <p className="mb-4 text-lg leading-relaxed">{message?.second_para}</p>
    {/* Add additional paragraphs as needed */}
    
  </div>
</div>

  );
}
