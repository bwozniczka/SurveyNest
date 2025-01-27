"use client"

import FormBuilder from "./FormBuilder";
import JobApplicationForm from "./survey-templates/JobApplicationForm";
import BlankForm from "./survey-templates/BlankForm";
import FeedbackForm from "./survey-templates/FeedbackForm";
import NewsletterSignupForm from "./survey-templates/NewsletterSignup";
import ContactForm from "./survey-templates/ContactForm";
import EventRegistrationForm from "./survey-templates/EventRegistrationForm";
import { useState } from "react";

export type SharedData = { name: string, content: { name: string; type: string; required: boolean, options: Array<string> }[] };
export default function FormBuilderView({ template }: { template: string }) {
    const [sharedData, setSharedData] = useState<SharedData>({ name: "", content: [] });

    return (
        <>
            {template === "JobApplicationForm" && <JobApplicationForm sharedData={sharedData} setSharedData={setSharedData} />}
            {template === "BlankForm" && <BlankForm sharedData={sharedData} setSharedData={setSharedData} />}
            {template === "FeedbackForm" && <FeedbackForm sharedData={sharedData} setSharedData={setSharedData} />}
            {template === "NewsletterSignupForm" && <NewsletterSignupForm sharedData={sharedData} setSharedData={setSharedData} />}
            {template === "ContactForm" && <ContactForm sharedData={sharedData} setSharedData={setSharedData} />}
            {template === "EventRegistrationForm" && <EventRegistrationForm sharedData={sharedData} setSharedData={setSharedData} />}
            <FormBuilder sharedData={sharedData} setSharedData={setSharedData} />
        </>
    );
}