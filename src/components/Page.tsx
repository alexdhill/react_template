import React, {useEffect} from "react";

import "../theming/Page.css"

// interface PageProps {
//     setActive: React.Dispatch<React.SetStateAction<string>>
// }

const Page: React.FC = (props) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return(
        <div className="page">
            {props.children}
        </div>
    )
}

export default Page;