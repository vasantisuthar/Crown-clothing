import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KJfVhSALu04zidQskPAhXS1KyX9HjJWe2i7GBG5dCLUTqbCNja6oErGWxRbsGnUw3HEqsSJPGuhAPPttd6vRHQH00tPFOb7l9';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return(
        <StripeCheckout
            label='Pay now'
            name='CROWN clothing'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;