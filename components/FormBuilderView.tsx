"use client"

import FormBuilder from "./FormBuilder";
import JobApplicationForm from "./survey-templates/JobApplicationForm";
import { useState } from "react";

export type SharedData = { name: string; type: string; }[];
export default function FormBuilderView({ template }: { template: string }) {
    const [sharedData, setSharedData] = useState<SharedData>([]);

    return (
        <>
            {template === "JobApplicationForm" && <JobApplicationForm sharedData={sharedData} setSharedData={setSharedData} />}
            <FormBuilder sharedData={sharedData} setSharedData={setSharedData} />
        </>
    );
}