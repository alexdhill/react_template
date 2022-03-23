import React, {useEffect, useContext} from "react";

import { Controller } from "../App";

import "../theming/Page.css"

interface PageProps {
    name: string
}

const Page: React.FC<PageProps> = (props) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const controller = useContext(Controller);
    controller.setActivePage(props.name);

    return(
        <div className="page">
            {props.children}
        </div>
    )
}

export default Page;