import Stripe from "stripe";
import { config } from "dotenv";
config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  let total = 0;

  items.forEach((item) => {
    total += item.qty * Number(item.price);
  });

  let tax = total * 0.1;
  let shipping = total * 0.01;
  let grandTotal = (total + tax + shipping).toFixed(2);
  return grandTotal * 100;
};

export const paymentIntent = async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
