'use client'
import React, { useEffect, useState } from "react";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [csrfToken, setCsrfToken] = useState("");

    useEffect(() => {
        // Fetch CSRF token from your server
        fetch("/api/get_csrf_token")
            .then((response) => response.json())
            .then((data) => setCsrfToken(data.csrf_token))
            .catch((error) => console.error("Error fetching CSRF token:", error));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
            } else {
                const errorData = await response.json();
                setErrors(errorData.errors);
            }
        } catch (error) {
            console.error("An error occurred during signup:", error);
        }


        setIsLoading(false);
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-1/2 mx-auto bg-gray-600 p-8 rounded text-black"
        >
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button
                type="submit"
                className={`w-full ${isLoading
                    ? "text-gray-400 hover:cursor-wait"
                    : " text-white font-bold bg-red-500  hover:bg-yellow-600 border-yellow-600 hover:border-ug-red-500 "
                    }  py-2 px-4 border-b-4 rounded`}
            >
                Log In 
            </button>
        </form>
    )
}

export default Login
