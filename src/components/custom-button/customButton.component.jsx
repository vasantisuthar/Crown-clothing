import React from "react";
import './customButton.styles.css'

const CustomButton = ({children, isGoogleSignIn,inverted, handleClick,...otherProps}) => {
    return ( 
        <button 
        type="button" 
        onClick={handleClick} 
        className={`${inverted ? 'inverted' : ''}
            ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}{...otherProps}>
            {children}
        </button>
        
     );
}
 
export default CustomButton;