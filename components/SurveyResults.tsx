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
                console.log(response_decoded);
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
            {answers.length > 0 ?
                <>
                    <thead>
                        {answers.length > 0 && (
                            <tr>
                                {Object.keys(answers[0].answer).filter(key => key != "resume").map((key, i) => (
                                    <th key={i} className="py-2 px-4 text-left">{key}</th>
                                ))}
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        {answers.map((answer, index) => (
                            <tr key={index} className="border-t">
                                {Object.keys(answer.answer).filter(key => key != "resume").map((key, i) => {
                                    return <td key={i} className="py-2 px-4">{answer.answer[key]}</td>

                                })}
                            </tr>
                        ))}
                    </tbody></> : null}
        </table>
    );
};

export default SurveyResults;