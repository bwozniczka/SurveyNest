"use client"

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useEffect } from 'react';
import { SharedData } from '../FormBuilderView';

export type JobApplicationFormProps = { sharedData: SharedData; setSharedData: Dispatch<SetStateAction<SharedData>> }

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ sharedData, setSharedData }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null as File | null,
        coverLetter: ''
    });
    useEffect(() => {
        setSharedData([
            { name: "Name", type: "text" },
            { name: "Email", type: "email" },
            { name: "Phone", type: "text" },
            { name: "Resume", type: "file" },
            { name: "Cover letter", type: "textarea" }
        ])
        console.log("dupa")
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files) {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-orange-400 font-bold mb-2">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-orange-400 font-bold mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-orange-400 font-bold mb-2">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="resume" className="block text-orange-400 font-bold mb-2">Resume:</label>
                <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="coverLetter" className="block text-orange-400 font-bold mb-2">Cover Letter:</label>
                <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <button type="submit" className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400">
                Submit
            </button>
        </form>
    );
};

export default JobApplicationForm;