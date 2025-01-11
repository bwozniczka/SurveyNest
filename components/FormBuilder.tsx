"use client"

import React, { useState } from 'react';
import { JobApplicationFormProps } from './survey-templates/JobApplicationForm';

const FormBuilder: React.FC<JobApplicationFormProps> = ({ sharedData, setSharedData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const editFieldName = (event: React.ChangeEvent, index: number) => {
        const { value } = event.target;
        setSharedData(sharedData.map((field, i) => i === index ? { ...field, name: value } : field))
    }

    const editFieldType = (event: React.ChangeEvent, index: number) => {
        const { value } = event.target;
        setSharedData(sharedData.map((field, i) => i === index ? { ...field, type: value } : field))
    }

    const deleteField = (index: number) => {
        setSharedData(sharedData.filter((_, i) => i !== index))
    }

    const addField = () => {
        setSharedData([...sharedData, { name: '', type: 'text' }])
    }

    return (
        <div>
            <button onClick={toggleSidebar} className="px-4 py-2 bg-blue-500 text-white rounded">
                {isOpen ? 'Close' : 'Open'} Form Builder
            </button>
            <div className={`transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 h-full w-64 bg-gray-800 text-white overflow-y-scroll`}>
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-bold">Form Builder</h2>
                    <button onClick={toggleSidebar} className="text-white">
                        &#x2715;
                    </button>
                </div>
                {sharedData && sharedData.map(({ name, type }, index) =>
                    <div key={index} className="p-4 border-b border-gray-700 flex items-center space-x-4 flex-wrap">
                        <input type="text" name="name" value={name} onChange={(event) => editFieldName(event, index)} className="flex-1 p-2 bg-gray-900 text-white rounded" />
                        <select onChange={(event) => editFieldType(event, index)} value={type} name="type" id="type" className="p-2 bg-gray-900 text-white rounded">
                            <option value="text">Text</option>
                            <option value="email">Email</option>
                            <option value="textarea">Textarea</option>
                            <option value="file">File</option>
                        </select>
                        <button onClick={() => deleteField(index)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                    </div>
                )}
                <button className="p-4 bg-green-500 text-white w-full" onClick={addField}>Add Field</button>
                <button className="p-4 bg-blue-500 text-white w-full" onClick={() => { } /* TODO: call API */}>Save Form</button>
            </div>
        </div>
    );
};

export default FormBuilder;
