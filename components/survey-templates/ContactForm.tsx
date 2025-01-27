"use client"

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useEffect } from 'react';
import { BlankFormProps } from './BlankForm';

const ContactForm: React.FC<BlankFormProps> = ({ sharedData, setSharedData }) => {
    const [formData, setFormData] = useState({
        surveyName: '',
        name: '',
        email: '',
        phone: '',
        resume: null as File | null,
        coverLetter: ''
    });
    useEffect(() => {
        setSharedData({
            name: "Contact Form", content: [
                { name: "Name", type: "text", required: true, options: [] },
                { name: "Email", type: "email", required: true, options: [] },
                { name: "Your message", type: "textarea", required: true, options: [] }
            ]
        })
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

    const formStyling = {
        "text": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
        "email": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
        "textarea": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
        "file": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
        "date": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    }

    return (
        <form className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
            <h1>{sharedData.name}</h1>
            {sharedData && sharedData.content.map(({ name, type, required, options }, index) =>
                <div key={index} className="mb-4">
                    <label htmlFor={name.toLowerCase().replaceAll(" ", "_")} className="block text-orange-400 font-bold mb-2">{name.length > 0 ? name + ":" : null}</label>
                    {['text', 'email'].includes(type) ? <input type={type} name={name.toLowerCase().replaceAll(" ", "_")} className={formStyling[type]} /> : null}
                    {type == 'textarea' ? <textarea name={name.toLowerCase().replaceAll(" ", "_")} className={formStyling[type]} /> : null}
                    {type == 'file' ? <input type={type} name={name.toLowerCase().replaceAll(" ", "_")} className={formStyling[type]} /> : null}
                    {type == 'select' ? <select name={name.toLowerCase().replaceAll(" ", "_")}>
                        {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
                    </select> : null}
                    {type == 'radio' ? options.map((option, index) => <div key={index} className="flex items-center space-x-2">
                        <input type="radio" id={option.toLowerCase().replaceAll(" ", "_")} name={name.toLowerCase().replaceAll(" ", "_")} value={option} />
                        <label htmlFor={option.toLowerCase().replaceAll(" ", "_")}>{option}</label>
                    </div>) : null}
                    {type == 'checkbox' ? options.map((option, index) => <div key={index} className="flex items-center space-x-2">
                        <input type="checkbox" id={option.toLowerCase().replaceAll(" ", "_")} name={name.toLowerCase().replaceAll(" ", "_")} value={option} />
                        <label htmlFor={option.toLowerCase().replaceAll(" ", "_")}>{option}</label>
                    </div>) : null}
                    {type == 'date' ? <input type={type} name={name.toLowerCase().replaceAll(" ", "_")} className={formStyling[type]} /> : null}
                </div>
            )}
            <button type="submit" className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;