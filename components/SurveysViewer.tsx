"use client"

import React, { useEffect, useState } from 'react';
import { SharedData } from './FormBuilderView';
import { auth } from '@/auth';

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

    return (
        <div>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {loading ?
                    <>
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                            <div className="aspect-video rounded-xl bg-muted/50" />
                        </div>
                        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /></>
                    : <>
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            {surveys.map((survey, i) => (
                                <div
                                    key={i}
                                    className="aspect-video rounded-xl bg-muted/50 p-4 shadow-lg cursor-pointer"
                                    onClick={() => {
                                        window.location.href = `/survey-editor?survey_id=${survey.id}&user_id=${user_id}`;
                                    }}
                                >
                                    <h3 className="text-lg font-semibold mb-2">{survey.survey_data.name}</h3>
                                    <ul className="list-disc pl-5">
                                        {survey.survey_data.content.map(({ name, type, required, options }, j) => (
                                            <li key={j} className="mb-1">{name}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </>}
            </div >
        </div >
    );
};

export default SurveysViewer;