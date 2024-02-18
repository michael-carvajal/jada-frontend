'use client'
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const router = useRouter()

  useEffect(() => {
    // Fetch CSRF token from your server
    fetch("/api/get_csrf_token")
      .then((response) => response.json())
      .then((data) => setCsrfToken(data.csrf_token))
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);

    // Define the function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {

    event.preventDefault();
    setIsLoading(true);
    setErrors([])
    const formData = new FormData();
    formData.append("csrf_token", csrfToken);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        router.push('/dashboard')

      } else {
        const errorData = await response.json();
        setErrors(errorData.errors);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    }


    setIsLoading(false);
  };

  // Define the function to handle the cancel action
  const handleCancel = () => {
    // Handle the cancel action here
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-jada-green-500">
      <div className="w-full max-w-xs">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-center mb-6">Sign In</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="name@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
          <Button
              text="Sign In"

              additionalClasses="bg-jada-purple-800 hover:bg-jada-pink text-white"
            />
            <Button
              text="Cancel"
              onClick={handleCancel}
              additionalClasses="text-jada-pink-500 border border-jada-pink bg-white hover:bg-jada-pink hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
