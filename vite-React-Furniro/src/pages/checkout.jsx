import React from "react";
import AddInfo from "../components/common/additionInfo";
import CheckoutForm from "../components/checkout/checkoutForm";

function Checkout(){
    return(
        <React.Fragment>
            <CheckoutForm />
            <AddInfo />

        </React.Fragment>
    )
}

export default Checkout;