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
        console.log("Output",data);
        setMessage(data.about_pages[0])

      }

      fetchData()
    },[])
    return (
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
          <div className="flex-1">
              <Image
                  src="/flower.jpg"
                  alt="About Us"
                  width={500}
                  height={500}
                  layout="responsive"
              />
          </div>
          <div className="flex-1 p-4">
              <h1 className="text-2xl font-bold mb-4">About Jada</h1>

                  <p className="mb-2">{message?message.first_para:null}</p>
                  <p className="mb-2">{message?message.second_para:null}</p>

          </div>
      </div>
  );
}
