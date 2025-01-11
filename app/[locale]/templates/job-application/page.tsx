import { Footer } from "@/components/Footer";
import FormBuilder from "@/components/FormBuilder";
import FormBuilderView from "@/components/FormBuilderView";
import Navbar from "@/components/Navbar";
import JobApplicationForm from "@/components/survey-templates/JobApplicationForm";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <FormBuilderView template="JobApplicationForm"></FormBuilderView>
            <Footer></Footer>
        </>
    );
}
