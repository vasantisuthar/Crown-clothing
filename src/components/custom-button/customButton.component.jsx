import React from "react";
import './customButton.styles.css'

const CustomButton = ({children, isGoogleSignIn,handleClick,...otherProps}) => {
    return ( 
        <button 
        type="button" 
        onClick={handleClick} 
        className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}{...otherProps}>
            {children}
        </button>
     );
}
 
export default CustomButton;