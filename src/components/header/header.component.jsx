import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
// import './header.styles.css'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";


const Header = ({currentUser, hidden}) => {
    
    return ( 
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo  className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser ? 
                    <OptionLink as='div' style={{cursor:"pointer"}} className="option" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to="/signin" className="option">SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                hidden ? null :
                <CartDropdown/>

            }
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})
export default connect(mapStateToProps)(Header);
