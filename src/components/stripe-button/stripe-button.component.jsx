import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KbitjL0IILh1AFq0YOdjUtOgbltNJcNn7ByudWzWdZxyGSz3SeqFNbsQy2nxigYBELDw4lgr8pu7a7rktRyfKsv00LOrSd7hJ';

const onToken = (token) => {
  console.log(token);
  alert('Payment Successful');
  window.open('/');
};

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
         />
    )
};

export default StripeCheckoutButton;