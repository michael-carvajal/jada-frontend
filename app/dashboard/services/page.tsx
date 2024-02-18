'use client';

import React, { useState } from 'react';
import ServiceForm from '../components/ServiceForm'; // You need to create this component similar to ResourceForm

const initialServices = [
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

const DashboardServicesPage = () => {
  const [services, setServices] = useState(initialServices);
  const [editingService, setEditingService] = useState(null);

  const handleEdit = (service) => {
    setEditingService(service);
  };

  const handleDelete = (serviceTitle) => {
    setServices(services.filter(service => service.title !== serviceTitle));
  };

  const handleSave = (newService) => {
    if (editingService) {
      setServices(services.map(service => service.title === editingService.title ? newService : service));
    } else {
      setServices([...services, newService]);
    }
    setEditingService(null);
  };

  return (
    <div className="flex h-screen bg-gray-100 p-10">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        {editingService ? (
          <ServiceForm onSave={handleSave} initialService={editingService} />
        ) : (
          <button
            onClick={() => setEditingService({ title: '', description: '' })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
          >
            Add New Service
          </button>
        )}

        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded px-4 py-3">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p>{service.description}</p>
              <div className="flex justify-end space-x-2 mt-2">
                <button onClick={() => handleEdit(service)} className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(service.title)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default DashboardServicesPage;
