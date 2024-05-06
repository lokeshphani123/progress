import { Document, Page, Text, View } from "@react-pdf/renderer";
import PageContent from "../../interfaces/PageContent";
import { renderToString } from "react-dom/server";
import pageContent from "../../utils/pdf-data";
import DataGenerator from "../data-generator/data-generator-component";
import './pdf-renderer-style.css';

const PDFRendererComponent = () => {
    const generatePDF = async (contents: PageContent) => {
        const htmlString = renderToString(
                <Document>
                    <Page size="A4">
                        <View>
                            <DataGenerator content={contents}/>
                        </View>
                    </Page>
                </Document>
        );

        const blob = new Blob([htmlString], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
    }

    return (
        <>
            <button onClick={async () => await generatePDF(pageContent)}>Try PDF-Renderer</button>
        </>
    )
}

export default PDFRendererComponent;
