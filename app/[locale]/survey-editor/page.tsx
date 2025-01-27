import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FormEditorView from "@/components/FormEditorView";


export default async function Home() {


    return (
        <>
            <Navbar></Navbar>
            <FormEditorView></FormEditorView>
            <Footer></Footer>
        </>
    );
}