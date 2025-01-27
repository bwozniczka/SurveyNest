import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormEditorView from "@/components/FormEditorView";
import SurveyFiller from "@/components/SurveyFiller";


export default async function Home() {


    return (
        <>
            <Navbar></Navbar>
            <SurveyFiller></SurveyFiller>
            <Footer></Footer>
        </>
    );
}