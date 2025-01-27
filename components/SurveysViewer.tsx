"use client"

import React, { useEffect, useState } from 'react';
import { SharedData } from './FormBuilderView';
import SurveyResults from './SurveyResults';

interface SurveysViewerProps {
    user_id: string | undefined;
}

export type SurveysResponse = {
    id: number,
    survey_data: SharedData,
    user_id: number
}

const SurveysViewer: React.FC<SurveysViewerProps> = ({ user_id }) => {
    const [surveys, setSurveys] = useState<SurveysResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedSurveyId, setSelectedSurveyId] = useState<number | null>(null);
    const [copyText, setCopyText] = useState<string>("Copy link");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const surveys = await fetch("/api/database/survey/get/all", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ user_id })
                });
                let surveys_decoded = await surveys.json();
                console.log(surveys_decoded);
                setSurveys(surveys_decoded);
            } catch (error) {
                console.error('Error fetching survey data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user_id]);

    if (selectedSurveyId !== null) {
        return (
            <div>
                <button
                    className="m-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => setSelectedSurveyId(null)}
                >
                    Return
                </button>
                <SurveyResults survey_id={selectedSurveyId} />
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {loading ? (
                    <>
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                        </div>
                        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                    </>
                ) : (
                    <>
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            {surveys.map((survey, i) => (
                                <div
                                    key={i}
                                    className="aspect-video rounded-xl bg-muted/50 p-4 shadow-lg cursor-pointer"
                                >
                                    <h3 className="text-lg font-semibold mb-2">{survey.survey_data.name}</h3>
                                    <ul className="list-disc pl-5">
                                        {survey.survey_data.content.map(({ name, type, required, options }, j) => (
                                            <li key={j} className="mb-1">{name}</li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-2 mt-4">
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                            onClick={() => {
                                                window.location.href = `/survey-editor?survey_id=${survey.id}&user_id=${user_id}`;
                                            }}
                                        >
                                            Edit survey
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                            onClick={() => {
                                                setSelectedSurveyId(survey.id);
                                            }}
                                        >
                                            Show results
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                            onClick={() => {
                                                navigator.clipboard.writeText(`${window.location.origin}/fill/?survey_id=${survey.id}`);
                                                setCopyText("Copied!");
                                            }}
                                            onMouseOut={() => setCopyText("Copy link")}
                                        >
                                            {copyText}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SurveysViewer;