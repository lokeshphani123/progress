import jsPDF from "jspdf";
import DataGenerator from "../data-generator/data-generator-component";
import { renderToString } from "react-dom/server";
import pageContent from "../../utils/pdf-data";
import PageContent from "../../interfaces/PageContent";
import './js-pdf-style.css'
const PDFGenerator = () => {

    const generatePDF = async (contents: PageContent) => {
        const pdfComponent = <DataGenerator content={contents}/>
        const pdf = new jsPDF('p', 'pt', 'a4');
        await pdf.html(renderToString(pdfComponent), {
            autoPaging: 'slice'
        });
        pdf.output('dataurlnewwindow')    
    }

    return (
        <>
            <button onClick={async () => await generatePDF(pageContent)}>Try JS-PDF</button>
        </>
    )
};

export default PDFGenerator;
