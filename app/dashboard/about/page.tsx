"use client"
import { useContext, useEffect, useState } from "react"
import { MessageData } from "../../components/Context/context"
import CertificationForm from '../components/CertificationForm';

const initialCertifications = [
  {
    cert: 'Registered Behavorial Technician'
  },
  {
    cert: 'CPR Certified'
  },
  {
    cert: 'Certified Childcare Nanny'
  }
];

const AboutPageDashboard = () => {
  const messageContext = useContext(MessageData);

    const [certifications, setCertifications] = useState(initialCertifications);
    const [editingCertification, setEditingCertification] = useState(null);

    const handleEdit = (certification) => {
      setEditingCertification(certification);
    };

    const handleDelete = (certificationTitle) => {
      setCertifications(certifications.filter(certification => certification.cert !== certificationTitle));
    };

    const handleSave = (newCertification) => {
      if (editingCertification) {
        setCertifications(certifications.map(certification => certification.cert === editingCertification.cert ? newCertification : certification));
      } else {
        setCertifications([...certifications, newCertification]);
      }
      setEditingCertification(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
  // Accessing message and setMessage from context
  const { message, setMessage } = messageContext || {};
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    async function fetchData(params:any) {
      const response = await fetch('/api/about_page')
      const data = await response.json();
      setMessage(data.about_pages[0])  
  
    }
  
    fetchData()
  },[])

  const handleSubmit = async (event: React.FormEvent) => {
    // Handle the Book Jada button click
    event.preventDefault();
    setSuccess(false)
    setErrors([])
    const formData = {};

    try {
      const response = await fetch("/api/about_page/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ ...message }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(true)

      } else {
        const errorData = await response.json();
        setErrors(errorData.errors);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    }

  }

  const changeValues = (e) => {
    const updatedMessage = {
      ...message,
      [e.target.name]: e.target.value,
    };
    setMessage(updatedMessage);
  }

  return (
    <div className="flex h-screen bg-gray-100 p-10">
    <div className="max-w-9xl w-full space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold mb-6">Certifications:</h1>
        {editingCertification ? (
        <CertificationForm onSave={handleSave} initialCertification={editingCertification}/>
          ) : (
            <button onClick={() => setEditingCertification({ cert: '' })} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4">
              Add new Certification
            </button>
          )}
          {certifications.map((certification, index) => (
            <div key={index} className="bg-white shadow-md rounded px-4 py-3">
              <h2 className="text-xl font-semibold">{certification.cert}</h2>
              <div className="flex justify-end space-x-2 mt-2">
                <button onClick={() => handleEdit(certification)} className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(certification)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Delete</button>
              </div>
            </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-6">About Page</h1>
          <label htmlFor="paragraphOne" className="block text-lg font-medium text-gray-700 mb-2">First Paragraph</label>
          <textarea
            id="paragraphOne"
            name="first_para"
            value={message ? message.first_para : null}
            onChange={changeValues}
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="paragraphTwo" className="block text-lg font-medium text-gray-700 mb-2">Second Paragraph</label>
          <textarea
            id="paragraphTwo"
            name="second_para"
            value={message ? message.second_para : null}
            onChange={changeValues}
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          ></textarea>
        </div>
        <button
           type="submit"
          className="group relative w-3/12 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
        {success && <p className="text-green-600 font-bold">About Page updated successfully</p>}
        </form>
      </div>
    </div>
  );
};

export default AboutPageDashboard;