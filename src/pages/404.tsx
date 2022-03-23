import React from "react";
import Page from "../components/Page";

import "../theming/404.css";

const Error404: React.FC = () => {
    return(
        <Page name="error404">
            <p>Error 404: Page Not Found</p>
        </Page>
    )
}

export default Error404;