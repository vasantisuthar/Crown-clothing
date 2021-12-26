import React from "react";
import CustomButton from "../custom-button/customButton.component";

import './cart-dropdown.styles.css'

const CartDropdown = () => {
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>Go to checkout</CustomButton>
            </div>
        </div>
     );
}
 
export default CartDropdown;