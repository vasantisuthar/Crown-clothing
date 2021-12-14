import React from "react";
import './customButton.styles.css'

const CustomButton = ({children, ...otherProps}) => {
    return ( 
        <button className="custom-button">
            {children}
        </button>
     );
}
 
export default CustomButton;