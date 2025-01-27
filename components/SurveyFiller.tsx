"use client"

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useEffect } from 'react';
import { SharedData } from './FormBuilderView';
import { useSearchParams, useRouter } from 'next/navigation';
import { SurveysResponse } from './SurveysViewer';

const SurveyFiller: React.FC = () => {
    const [sharedData, setSharedData] = useState<SharedData>({ name: "", content: [] });
    const [survey, setSurvey] = useState<SurveysResponse>({ id: 0, survey_data: { name: "", content: [] }, user_id: 0 });
    const [answerState, setAnswerState] = useState<string>("Submit")

    const searchParams = useSearchParams();
    const router = useRouter();
    const survey_id = searchParams.get('survey_id');

    console.log(survey_id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const surveys = await fetch("/api/database/survey/get/one", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ survey_id })
                });
                let surveys_decoded = await surveys.json();
                console.log(surveys_decoded);
                setSurvey(surveys_decoded);
                setSharedData(surveys_decoded.survey_data)
            } catch (error) {
                console.error('Error fetching survey data:', error);
            } finally {
                console.log("loaded")
            }
        };

        fetchData();
    }, []);
    const formStyling = {
        "text": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
        "email": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
        "textarea": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400",
        "file": "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    }

    const sendResponse = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if the user has already answered the survey
        if (document.cookie.includes(`answered_${survey_id}=true`)) {
            setAnswerState("You have already answered this survey");
            return;
        }

        const formData = new FormData(e.target as HTMLFormElement);
        let answer: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value, key) => answer[key] = value);
        const data = { survey_id: survey_id, answer: answer };
        console.log(data);

        await fetch("/api/database/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res => {
            if (res.message == "added") {
                setAnswerState("Thank you for answering");
                // Set a cookie to prevent multiple answers
                document.cookie = `answered_${survey_id}=true; path=/; max-age=31536000`; // Cookie valid for 1 year
            } else {
                setAnswerState("Problem with handling your answer");
            }
        });
    }

    return (
        <form onSubmit={sendResponse} id="survey-form" className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
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
                </div>
            )}
            <button type="submit" className="w-full bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400">
                {answerState}
            </button>
        </form>
    );
};

export default SurveyFiller;