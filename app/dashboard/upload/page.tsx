'use client';

import React, { useCallback } from 'react';
import ImageUpload from '../components/ImageUpload'; // Assuming ImageUpload is in the same folder

const DashboardUploadPage: React.FC = () => {
  // Placeholder images, replace with the actual paths or state if dynamic
  const logoImage = '/logo.png';
  const headshotImage = '/flower.jpg';

  const handleLogoChange = useCallback((file: File) => {
    // Handle logo file upload
    console.log('Logo to be uploaded:', file);
    // Implement your API call to upload the logo image
  }, []);

  const handleHeadshotChange = useCallback((file: File) => {
    // Handle headshot file upload
    console.log('Headshot to be uploaded:', file);
    // Implement your API call to upload the headshot image
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 p-10">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold mb-6">Upload Images</h1>
        <ImageUpload
          label="Logo Image"
          currentImage={logoImage}
          onImageChange={handleLogoChange}
        />
        <ImageUpload
          label="Headshot Image"
          currentImage={headshotImage}
          onImageChange={handleHeadshotChange}
        />
      </div>
    </div>
  );
};

export default DashboardUploadPage;
