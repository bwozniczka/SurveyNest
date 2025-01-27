"use client"

import { useEffect, useState } from 'react';

interface SurveyResultsProps {
    survey_id: number;
}

const SurveyResults: React.FC<SurveyResultsProps> = ({ survey_id }) => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const response = await fetch("/api/database/answer/getall", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ survey_id })
                });
                let response_decoded = await response.json();
                setAnswers(response_decoded);
            } catch (error) {
                console.error('Error fetching answers:', error);
            }
        };

        if (survey_id) {
            fetchAnswers();
        }
    }, [survey_id]);

    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2">Name</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Phone</th>
                    <th className="py-2">Cover Letter</th>
                </tr>
            </thead>
            <tbody>
                {answers.map((answer, index) => (
                    <tr key={index} className="border-t">
                        <td className="py-2 px-4">{answer.answer.name}</td>
                        <td className="py-2 px-4">{answer.answer.email}</td>
                        <td className="py-2 px-4">{answer.answer.phone}</td>
                        <td className="py-2 px-4">{answer.answer.cover_letter}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SurveyResults;