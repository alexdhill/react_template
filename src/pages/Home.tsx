import React from "react";

import Page from "../components/Page";

import "../theming/Home.css"

interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {


    return(
        <Page name="home">
            <p>Home Page</p>
        </Page>
    );
}

export default Home;