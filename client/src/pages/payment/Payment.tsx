import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "@/components/paymentForm/PaymentForm";
import { useAppSelector } from "@/store";
import { Box } from "@mui/material";

type Props = {}

const stripePromise = loadStripe("pk_test_51JwA0lFKAoQKKPcWHtRMtaq2hjx2BJYtAUcraOkwoAuOtmtKjHwFSzH546sGshxkOjTVjUYnpxQzUNuKzhIUtoTJ002v4b5OSN");

const Payment = (props: Props) => {

  const [clientSecret, setClientSecret] = useState("");
  
  const items = useAppSelector(state => state.cart.items)
  
  useEffect(() => {
    fetch("http://localhost:5000/api/payment/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Box sx={{
      display: 'grid',
      placeContent:'center',
      minHeight: '65%',
    }}>
      {clientSecret && (
        //@ts-ignore
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </Box>
  );
}

export default Payment