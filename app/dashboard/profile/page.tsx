'use client';

import React, { useState } from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button'; // Assuming Button component is similar to TextField

const ProfilePage: React.FC = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform email update logic here...
    };

    const handlePasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Clear any existing error messages
        setPasswordError('');

        // Check if the new password and confirm password match
        if (newPassword !== confirmPassword) {
            // Set the error message if they don't match
            setPasswordError('Passwords do not match');
            return; // Stop the form submission
        }

        // If passwords match, continue with the form submission logic
        // ... (your password update logic here)

        // Clear the form fields (optional)
        setNewPassword('');
        setConfirmPassword('');
        setCurrentPassword('');
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4">Profile Settings</h1>

            <section aria-labelledby="email-section">
                <h2 id="email-section" className="text-2xl font-semibold mb-3">Update Email Address</h2>
                <form onSubmit={handleEmailSubmit} className="mb-8">
                    <TextField
                        label="Current Password"
                        name="currentPasswordForEmail"
                        type="password"
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField
                        label="New Email"
                        name="newEmail"
                        type="email"
                        required
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <button type="submit"

                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >Update Email</button>
                </form>
            </section>

            <section aria-labelledby="password-section">
                <h2 id="password-section" className="text-2xl font-semibold mb-3">Change Password</h2>
                <form onSubmit={handlePasswordSubmit}>
                    <TextField
                        label="Current Password"
                        name="currentPasswordForPassword"
                        type="password"
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField
                        label="New Password"
                        name="newPassword"
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm New Password"
                        name="confirmPassword"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}

                    <button type="submit"

                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >Update Password</button>
                </form>
            </section>
        </div>
    );
};

export default ProfilePage;
