import React from "react";

import Page from "../components/Page";

import "../theming/About.css";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {

    return(
        <Page name="about">
            <p>About</p>
        </Page>
    );
}

export default About;