import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavContext } from "../App";
import Page from "../components/Page";

import "../theming/About.css";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    const setActive = useContext(NavContext)[2];
    useEffect(() => {
        setActive("about");
    }, []);

    return(
        <Page>
            <p>About</p>
        </Page>
    );
}

export default About;