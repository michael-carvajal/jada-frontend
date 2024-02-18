
import React, { useState, useRef } from 'react';
import { FaUpload, FaFileUpload, FaCloudUploadAlt } from 'react-icons/fa';

type ImageUploadProps = {
  label: string;
  currentImage: string;
  onImageChange: (file: File) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({ label, currentImage }) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState(currentImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setPreview(URL.createObjectURL(selectedFile)); // Preview the image
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    // Handle the upload process here
    // Since there's no backend yet, this function will not perform any server-side upload
    // The image will be shown in the preview and will be lost on page refresh
  };

  return (
    <div className="space-y-4 bg-gray-100 p-4 rounded-lg">
      <label className="block text-lg font-medium text-gray-700">{label}</label>
      <img src={preview} alt={`Preview of ${label}`} className="h-40 w-40 object-cover rounded-md" />

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleImageSelect}
        className="hidden"
      />

      {file ? (
        <>
          <p 
      className="text-jada-blue-900 font-semibold text-lg bg-white p-2 rounded-md"
      aria-label={`Selected file: ${fileName}`}
    >
      {fileName}
    </p>
          <button
            onClick={handleUpload}
            className="group relative w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jada-green-500"
            aria-label={fileName ? `Upload file named ${fileName}` : 'Upload file'}
          >
            <FaCloudUploadAlt className="mr-2" />
            Upload
          </button>
        </>
      ) : (
        <button
          onClick={triggerFileInput}
          className="group relative w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Choose file to upload"
        >
          <FaFileUpload className="mr-2" />
          Choose File
        </button>
      )}
    </div>
  );
};

export default ImageUpload;