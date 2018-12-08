import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { userInfo } from 'os';
import { logoutUser } from '../../actions/authAction';
import { clearCurrentProfile } from '../../actions/profileActions';


class Payments extends Component {
    render() {
       
        return(
            <StripeCheckout
                name="Vivek"
                description="You can pay now"
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
           <a herf="/success"> <div className="btn  btn-info mt-4">Pay With Card</div> </a> 
            </StripeCheckout>
        )
    }
}
export default Payments;