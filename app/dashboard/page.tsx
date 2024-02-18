"use client"
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { MessageData } from "../components/Context/context"
import Button from "../components/Button"
export default function DashboardPage() {
  const messageContext = useContext(MessageData);

  // Accessing message and setMessage from context
  const { message, setMessage } = messageContext || {};
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/home_page')
      const data = await response.json();
      setMessage(data.home_page[0])
    }

    fetchData()
  }, [])
  const handleSubmit = async (event: React.FormEvent) => {
    // Handle the Book Jada button click
    event.preventDefault();
    setSuccess(false)
    setErrors([])
    const formData = {};

    try {
      const response = await fetch("/api/home_page/1", {
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

  const changeValues = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedMessage = {
      ...message,
      [e.target.name]: e.target.value,
    };
    // @ts-ignore: Suppress the warning for the next line
    setMessage(updatedMessage);
  }

  return (
    <div className="flex h-screen bg-gray-100 p-10">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold mb-6">Home Page</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
      <label htmlFor="siteTitle" className="block text-lg font-medium text-gray-700">Site Title</label>
      <input
        name="site_title"
        value={message ? message.site_title : null}
        onChange={changeValues}
        type="text"
        id="siteTitle"
        className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Jada Last-Name"
      />
    </div>
    <div>
      <label htmlFor="siteSubtitle" className="block text-lg font-medium text-gray-700">Site Subtitle</label>
      <input
        name="site_subtitle"
        value={message ? message.site_subtitle : null}
        onChange={changeValues}
        type="text"
        id="siteSubtitle"
        className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="A Great Nanny"
      />
    </div>
    <div>
      <label htmlFor="homePageText" className="block text-lg font-medium text-gray-700">Home Page Text</label>
      <textarea
        name="page_text"
        value={message ? message.page_text : null}
        onChange={changeValues}
        id="homePageText"
        rows={4}
        className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Lorem ipsum"
      ></textarea>
    </div>
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
    {success && <p className="text-green-600 font-bold">Hero Card updated successfully</p>}
  </form>
  </div>
</div>

  );
}
