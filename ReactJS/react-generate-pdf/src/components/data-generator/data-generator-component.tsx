import { Fragment } from "react/jsx-runtime";
import PageContent from "../../interfaces/PageContent";

const DataGenerator: React.FC<{ content: PageContent }> = ({ content }) => {
    return (
        <Fragment>
            <h1>{ content.header }</h1>
            { content.body.sections.map((section, index) => (
                <div key={ index }>
                    <h2>{ section.component }</h2>
                    <p> { section.definition }</p>
                </div>
            ))}
        </Fragment>
    )
}

export default DataGenerator;