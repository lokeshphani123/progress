interface PageContent {
    header: string;
    body: {
        sections: {
            component: string;
            definition: string;
        }[];
    };
}

export default PageContent;