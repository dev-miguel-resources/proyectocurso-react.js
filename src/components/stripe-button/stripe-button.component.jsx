import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_2ItnOp8aqsITEQBJmKfU6mgr00qqXDB5n4';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckOut
            label = 'Pay Now'
            name = 'La Escala SpA.'
            billingAddress
            shippingAddress
            image = ''
            description = {`Your total us $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />        
    );
};

export default StripeCheckoutButton;