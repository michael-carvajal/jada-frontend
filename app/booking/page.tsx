/**
 * BookingPage Component
 * 
 * This component is designed to embed the YouCanBook.me widget into our booking page. 
 * We use a `useEffect` hook to manage the lifecycle of the script that loads the widget:
 * 
 * 1. Upon component mounting, we create a new script element pointing to the YouCanBook.me embed script.
 * 2. We assign it the 'async' attribute to ensure it doesn't block the rendering of our page.
 * 3. The 'data-domain' attribute is set to match our specific YouCanBook.me domain.
 * 4. We then append this script to a div referenced by `scriptContainerRef`, which is specifically reserved for this script.
 * 5. The `useEffect` cleanup function ensures that when the component unmounts, we remove the script element from the DOM.
 *    This prevents any residual loading or execution when the user navigates away from the booking page.
 * 
 * It's important to note that the direct manipulation of the DOM with script elements is necessary here
 * because the third-party embed script from YouCanBook.me operates outside the React lifecycle,
 * and we need fine-grained control to ensure it is loaded and unloaded exactly as needed.
 * 
 * We refrain from using the <Script> component from 'next/script' to avoid any potential conflicts 
 * with React's rendering and to allow for proper cleanup on component unmount.
 */

'use client';

import React, { useEffect, useRef } from 'react';

const BookingPage: React.FC = () => {
    const scriptContainerRef = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.src = "https://embed.ycb.me/embed.js";
        script.async = true;
        script.setAttribute('data-domain', 'tomleger'); // Replace with your actual YouCanBook.me domain

        // Append the script to the container
        if (scriptContainerRef.current) {
            scriptContainerRef.current.appendChild(script);
        }

        // Cleanup function
        return () => {
            if (scriptContainerRef.current && scriptContainerRef.current.contains(script)) {
                scriptContainerRef.current.removeChild(script);
            }
        };
    }, []);

    return (
        
        <div className="container mx-auto p-4" ref={scriptContainerRef}>
            {/* The script will be injected into this div */}
        </div>
    );
};

export default BookingPage;