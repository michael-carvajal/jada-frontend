import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Specialized Behavior Support",
    description: "As a Registered Behavior Technician, I provide specialized support for children with autism and other behavioral needs. My approach is tailored to each child, focusing on positive reinforcement and skill development."
  },
  {
    title: "Customized Book Clubs",
    description: "Fostering a love for reading, I organize book clubs for children who can read independently. This encourages literacy, imagination, and social interaction in a fun, engaging environment."
  },
  {
    title: "Multilingual and Cultural Exposure",
    description: "Understanding the importance of cultural diversity, I offer exposure to different languages and cultures. This includes books in Spanish, songs in Mandarin, or using ASL, catering to your family's preferences and heritage."
  },
  {
    title: "Tailored Redirection Methods",
    description: "Discipline is not part of my approach. Instead, I focus on gentle redirection, aligning with your family's values and parenting style to ensure a consistent and nurturing environment for your child."
  },
  {
    title: "Allergy and Sensitivity Accommodations",
    description: "Your child's health is paramount. I take all necessary precautions to accommodate any allergies or sensitivities, including dietary restrictions, pet allergies, or sensitivities to scents."
  },
  {
    title: "Household Respect and Safety",
    description: "I respect your household rules, including off-limits areas for children and adherence to any specific parental guidelines regarding child activities and behavior."
  },
  {
    title: "Tutoring and Academic Support",
    description: "Leveraging my early college experience, I provide tutoring and homework assistance. My aim is to support your child's academic growth with personalized attention and educational encouragement."
  },
  {
    title: "Emergency Response Preparedness",
    description: "Certified in CPR and childcare, I am prepared to respond effectively to any emergency, ensuring your child's safety and well-being at all times."
  },
  {
    title: "Flexible and Electronic Payment Options",
    description: "For your convenience, I accept various electronic payment methods through the website. This secure and straightforward process ensures hassle-free transactions."
  },
  {
    title: "Introductory Meetings and Custom Service Plans",
    description: "I believe in starting our journey with a comprehensive introductory meeting. This allows me to understand your family's unique needs and tailor my services accordingly, ensuring the best care for your child."
  }
];


export default function ServicesPage() {
  return (

    <div className="container mx-auto p-4 flex flex-col md:flex-row ">
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-jada-purple-800">Our Services</h1>
        {services.map((service, index) => (
          <div key={index} className="mb-8 p-4 rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-semibold text-jada-purple-700 mb-4">{service.title}</h2>
            <p className="text-md text-gray-700">{service.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
