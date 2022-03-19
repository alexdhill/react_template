import React, { useContext } from "react";
import { useEffect } from "react";
import { NavContext } from "../App";

import Page from "../components/Page";

import "../theming/Home.css"

interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
    const setActive = useContext(NavContext)[2];
    useEffect(() => {
        setActive("/");
    }, []);

    return(
        <Page>
            <p>Home Page</p>
        </Page>
    );
}

export default Home;