import React, { useContext, useEffect, useState } from "react";

import "../styles/cart.scss";

import { AppContext } from "../context";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Container } from "@mui/material";
import axios from "../axios";



function Cart() {
  const { cartData, total } = useContext(AppContext);

  const stripe = useStripe();
  const elements = useElements();


  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);



  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleCheckoutClick = () =>{
    setShowPaymentForm(true);
  };


 

  const handleFormSubmit = async(event) =>{
    event.preventDefault();
    setProcessing(true);


    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log("paymentIntent", paymentIntent);

        //perform database operations here

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        showToastMessage({
          message: "Your payment has been successfully received.",
          type: "success",
          position: "bottom-right",
        });
      })
      .catch((e) => {
        setSucceeded(false);
        setError(e);
        setProcessing(false);
      });
  };




  const handleChange = (event) =>{
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
    console.log(event);
  };

  useEffect(() => {

    const getClientSecret = async () => {
      const amount = parseFloat(total?.total * 100).toFixed(2);
      const response = await axios.post(`/payments/create?total=${amount}`);
      setClientSecret(response.data.clientSecret);
    };

    if (total?.total > 0) {
      getClientSecret();
    }
  }, [total]);

    // const getClientSecret = async () => {
    //   try {
    //     const response = await axios.post(`/payments/create?total=${total?.total * 100}`,
    //     );
    //     console.log("Client Secret Response:", response.data);
    //     setClientSecret(response.data.clientSecret);
    //   } catch (error) {
    //     console.error("Error fetching client secret:", error);
    //   }
    // };



    

  console.log("Total amount", total?.total);

  console.log("client Secret", clientSecret);

  return (
    <React.Fragment>
      <Container>
      <section className="cart-table-section">
          <table>
            <thead>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </thead>
            <tbody>
              {cartData?.map((item) => (
                <tr>
                  <td>
                    <img src={item.imgUrl} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.subTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-total">
            <h3>Cart Totals</h3>
            <div className="cart-total--row">
              <label>Sub Total</label>
              <p className="sub-total">{total?.subTotal}</p>
            </div>
            <div className="cart-total--row">
              <label>Total</label>
              <p className="total">{total?.total}</p>
            </div>
            {!showPaymentForm && (
              <button onClick={handleCheckoutClick}>Checkout</button>
            )}

          </div>
        </section>


        {showPaymentForm && (
          <form onSubmit={handleFormSubmit} className="payment-form">
            <h3>Payment</h3>
            <label>Full name(as displayed on card) </label>
               <input type="text" placeholder="John Deo"/>
            <CardElement onChange={handleChange}  className="card-element"/>
            <button type="submit" className="pay-button">Pay Now</button>
          </form>
        )}


      </Container>
      
    </React.Fragment>
  );
}

export default Cart;