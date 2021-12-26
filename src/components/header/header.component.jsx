import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import './header.styles.css'

const Header = ({currentUser, hidden}) => {
    
    return ( 
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo  className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser ? 
                    <div style={{cursor:"pointer"}} className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to="/signin" className="option">SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null :
                <CartDropdown/>

            }
        </div>
    );
}

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);
