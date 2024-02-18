'use client';
import React, { useState } from 'react';

const DashboardContactPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    // For example, sending the email address to the server
    // Implement your API call to save the email address
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-100 p-10">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold mb-6">Contact Page</h1>
        <p>This is the email address where all submissions to the contact form will be sent.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="contact@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Email Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardContactPage;
