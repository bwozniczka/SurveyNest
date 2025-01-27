"use client"

import React, { useState } from 'react';
import { getToken } from 'next-auth/jwt';
import { BlankFormProps } from './survey-templates/BlankForm';

const FormBuilder: React.FC<BlankFormProps> = ({ sharedData, setSharedData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [surveySave, setSurveySave] = useState<boolean | null>(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const editFieldName = (event: React.ChangeEvent, index: number) => {
        const { value } = event.target;
        setSharedData({ name: sharedData.name, content: sharedData.content.map((field, i) => i === index ? { ...field, name: value } : field) })
    }

    const editFieldType = (event: React.ChangeEvent, index: number) => {
        const { value } = event.target;
        setSharedData({ name: sharedData.name, content: sharedData.content.map((field, i) => i === index ? { ...field, type: value } : field) })
    }

    const editFieldRequired = (event: React.ChangeEvent, index: number) => {
        const { checked } = event.target;
        setSharedData({ name: sharedData.name, content: sharedData.content.map((field, i) => i === index ? { ...field, required: checked } : field) })
    }

    const moveFieldUp = (index: number) => {
        if (index === 0) return;
        const newSharedData = { name: sharedData.name, content: [...sharedData.content] };
        const temp = newSharedData["content"][index];
        newSharedData["content"][index] = newSharedData["content"][index - 1];
        newSharedData["content"][index - 1] = temp;
        setSharedData(newSharedData);
    }

    const moveFieldDown = (index: number) => {
        if (index === sharedData.content.length - 1) return;
        const newSharedData = { name: sharedData.name, content: [...sharedData.content] };
        const temp = newSharedData["content"][index];
        newSharedData["content"][index] = newSharedData["content"][index + 1];
        newSharedData["content"][index + 1] = temp;
        setSharedData(newSharedData);
    }

    const updateSurveyName = (e: React.ChangeEvent) => {
        setSharedData({ name: e.target.value, content: sharedData.content })
    }

    const updateOption = (index: number, optionIndex: number, event: React.ChangeEvent) => {
        const { value } = event.target;
        setSharedData({ name: sharedData.name, content: sharedData.content.map((field, i) => i === index ? { ...field, options: field.options.map((option, j) => j === optionIndex ? value : option) } : field) })
    }

    const addOption = (index: number) => {
        setSharedData({ name: sharedData.name, content: sharedData.content.map((field, i) => i === index ? { ...field, options: [...field.options, ''] } : field) })
    }

    const deleteOption = (index: number, optionIndex: number) => {
        setSharedData({ name: sharedData.name, content: sharedData.content.map((field, i) => i === index ? { ...field, options: field.options.filter((_, j) => j !== optionIndex) } : field) })
    }

    const deleteField = (index: number) => {
        setSharedData({ name: sharedData.name, content: sharedData.content.filter((_, i) => i !== index) })
    }

    const addField = () => {
        setSharedData({ name: sharedData.name, content: [...sharedData.content, { name: '', type: 'text', required: false, options: [] }] })
    }

    const saveForm = async () => {
        const token_response = await fetch("/api/token", { method: "GET" });
        const token_data = await token_response.json();
        const data = { survey: { name: sharedData.name, content: [...sharedData.content] }, user_id: token_data.token.sub };
        console.log(data)
        await fetch("/api/database/survey", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {
            if (res.message == "added") {
                setSurveySave(true)
            } else {
                setSurveySave(false)
            }
        });
    }

    return (
        <div>
            <button onClick={toggleSidebar} className="px-4 py-2 bg-blue-500 text-white rounded">
                {isOpen ? 'Close' : 'Open'} Form Builder
            </button>
            <div className={`transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 h-full w-100 bg-gray-800 text-white overflow-y-scroll`}>
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-bold">Form Builder</h2>
                    <button onClick={toggleSidebar} className="text-white">
                        &#x2715;
                    </button>
                </div>
                <div className='mb-auto'>
                    <input className="m-4 flex-1 p-2 bg-gray-900 text-white rounded" type="text" name="surveyName" id="surveyName" value={sharedData.name} onChange={(e) => updateSurveyName(e)} />
                    {sharedData && sharedData.content.map(({ name, type, required, options }, index) =>
                        <div key={index} className="p-4 border-b border-gray-700 flex flex-col items-center space-x-4 flex-wrap">
                            <div className='flex flex-row items-center space-x-4'>
                                <input type="text" name="name" value={name} onChange={(event) => editFieldName(event, index)} className="m-1 flex-1 p-2 bg-gray-900 text-white rounded" />
                                <select onChange={(event) => editFieldType(event, index)} value={type} name="type" id="type" className="m-1 p-2 bg-gray-900 text-white rounded">
                                    <option value="text">Text</option>
                                    <option value="email">Email</option>
                                    <option value="textarea">Textarea</option>
                                    <option value="file">File</option>
                                    <option value="select">Select</option>
                                    <option value="radio">Radio</option>
                                    <option value="checkbox">Checkbox</option>
                                    <option value="date">Date</option>
                                </select>
                                <label htmlFor="required" className="align-middle m-1 block text-white-400 font-bold mb-2">Required:</label>
                                <input type="checkbox" name="required" id="required" onChange={(event) => editFieldRequired(event, index)} checked={required} className="p-2 bg-gray-900 text-white rounded" />

                            </div>
                            {['select', 'radio', 'checkbox'].includes(type) ? <div className='mt-1 flex flex-col'>
                                {options.map((option, i) => <div key={i} className="flex items-center space-x-2">
                                    <input type="text" onChange={(event) => updateOption(index, i, event)} value={option} placeholder="Option" className="m-1 p-2 bg-gray-900 text-white rounded" />
                                    <button className='m-1 px-4 py-2 bg-red-500 text-white rounded' onClick={() => deleteOption(index, i)}>Delete Option</button>
                                </div>)}
                                <button onClick={() => addOption(index)} className="p-2 bg-green-500 text-white rounded">Add Option</button>
                            </div> : null}
                            <div className="flex space-x-4">
                                <button onClick={() => deleteField(index)} className="m-1 px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                                <button onClick={() => moveFieldUp(index)} className="m-1 px-4 py-2 bg-blue-500 text-white rounded">Up</button>
                                <button onClick={() => moveFieldDown(index)} className="m-1 px-4 py-2 bg-blue-500 text-white rounded">Down</button>
                            </div>
                        </div>
                    )}
                </div>
                <button className="p-4 bg-green-500 text-white w-full" onClick={addField}>Add Field</button>
                <button className="p-4 bg-blue-500 text-white w-full" onClick={saveForm}>Save Form</button>
                {surveySave == null ? null : <>{surveySave ? <h3>Survey saved!</h3> : <h3>Error while saving survey...</h3>}</>}
            </div>
        </div>
    );
};

export default FormBuilder;
