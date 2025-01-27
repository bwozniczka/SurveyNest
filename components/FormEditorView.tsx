"use client"

import FormBuilder from "./FormBuilder";
import { useState, useEffect } from "react";
import { SharedData } from "./FormBuilderView";
import BlankForm from "./survey-templates/BlankForm";
import { SurveysResponse } from "./SurveysViewer";
import { useSearchParams, useRouter } from 'next/navigation';
import FormEditor from "./FormEditor";

const FormEditorView: React.FC = () => {
    const [sharedData, setSharedData] = useState<SharedData>({ name: "", content: [] });
    const [survey, setSurvey] = useState<SurveysResponse>({ id: 0, survey_data: { name: "", content: [] }, user_id: 0 });

    const searchParams = useSearchParams();
    const router = useRouter();
    const user_id = searchParams.get('user_id');
    const survey_id = searchParams.get('survey_id');

    if (!user_id || !survey_id) {
        router.push('/dashboard');
        return null;
    }
    console.log(user_id, survey_id)

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

    return (
        <>
            <BlankForm sharedData={sharedData} setSharedData={setSharedData} />
            <FormEditor survey_id={survey_id} sharedData={sharedData} setSharedData={setSharedData} />
        </>
    );
}

export default FormEditorView