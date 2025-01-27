import { Footer } from "@/components/Footer";
import FormBuilder from "@/components/FormBuilder";
import FormBuilderView from "@/components/FormBuilderView";
import Navbar from "@/components/Navbar";
import JobApplicationForm from "@/components/survey-templates/JobApplicationForm";
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth()
    return (
        <>
            <Navbar></Navbar>
            <FormBuilderView template="NewsletterSignupForm"></FormBuilderView>
            <Footer></Footer>
        </>
    );
}
