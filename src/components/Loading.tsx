import React from "react";

import "../theming/Loading.css";

interface LoadingProps {
    open: boolean
}

const Loading: React.FC<LoadingProps> = (props) => {

    return(
        <div className={props.open?"load_backdrop":"hidden"}>
            <div className="spinner">
                <div className="loader">
                    <div className="dot dot1"><i></i></div>
                    <div className="dot dot2"><i></i></div>
                    <div className="dot dot3"><i></i></div>
                    <div className="dot dot4"><i></i></div>
                    <div className="dot dot5"><i></i></div>
                    <div className="dot dot6"><i></i></div>
                    <div className="dot dot7"><i></i></div>
                    <div className="dot dot8"><i></i></div>
                    <div className="dot dot9"><i></i></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;