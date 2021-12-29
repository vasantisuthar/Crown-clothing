import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/customButton.component";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.css'

const CartDropdown = ({cartItems, dispatch}) => {
    const navigate = useNavigate();
    return ( 
        <div className="cart-dropdown">
            <div className="cart-items">

{               
                cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item= {cartItem}/> ))
                :
                <span className="empty-message">Your cart is empty</span>
}            
            </div>
            
            <CustomButton onClick ={() => {
                navigate('/checkout')
                dispatch(toggleCartHidden())
                }}>Go to checkout</CustomButton>
        </div>
     );
}
 
const mapStateToProps = (createStructuredSelector) ({
    cartItems: selectCartItems
})
export default connect(mapStateToProps) (CartDropdown);