import React from 'react';

import "../theming/Footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {

    return(
        <div className="footer">
            <div className="start_slot">
                <slot name="start">
                
                </slot>
            </div>
            <slot>

            </slot>
            <div className="end_slot">
                <slot name="end">
                    
                </slot>
            </div>
        </div>
    );
}

export default Footer;