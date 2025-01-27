"use client"

import FormBuilder from "./FormBuilder";
import JobApplicationForm from "./survey-templates/JobApplicationForm";
import { useState } from "react";

export type SharedData = { name: string, content: { name: string; type: string; required: boolean, options: Array<string> }[] };
export default function FormBuilderView({ template }: { template: string }) {
    const [sharedData, setSharedData] = useState<SharedData>({ name: "", content: [] });

    return (
        <>
            {template === "JobApplicationForm" && <JobApplicationForm sharedData={sharedData} setSharedData={setSharedData} />}
            <FormBuilder sharedData={sharedData} setSharedData={setSharedData} />
        </>
    );
}