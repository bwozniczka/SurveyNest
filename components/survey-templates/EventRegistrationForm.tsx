"use client";

import { useState } from 'react';

const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        event: '',
        eventType: '',
        eventDuration: 0,
        eventDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add form submission logic here
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-orange-400">Event Registration</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="event" className="block font-bold mb-2">Event name:</label>
                        <input
                            type="text"
                            id="event"
                            name="event"
                            value={formData.event}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eventType" className="block font-bold mb-2">Event Type:</label>
                        <input
                            type="text"
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eventDuration" className="block font-bold mb-2">Event Duration (hours):</label>
                        <input
                            type="range"
                            id="eventDuration"
                            name="eventDuration"
                            min="0"
                            max="24"
                            value={formData.eventDuration}
                            onChange={handleChange}
                            required
                            className="w-full accent-orange-400"
                        />
                        <span className="text-orange-400">{formData.eventDuration} hours</span>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="eventDate" className="block font-bold mb-2">Event Date:</label>
                        <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button type="submit" className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EventRegistrationForm;