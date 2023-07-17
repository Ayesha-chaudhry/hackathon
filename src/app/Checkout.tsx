"use client"
import getStripePromise from "../lib/stripe";

const products = [
    {
        product: 1,
        name: "Stripe Product",
        price: 400,
        quantity: 3,
    },
    {
        product: 2,
        name: "Stripe Product2",
        price: 4000,
        quantity: 2,
    },
];
const StripeCheckOutButton = () => {    
    const handleCheckout = async () => {   
        const stripe = await getStripePromise();     
        const response = await fetch("/api/stripe-session/", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            cache:"no-cache",
            body: JSON.stringify(products),
        });

        const data = await response.json();
        if(data.session){
            stripe?.redirectToCheckout({sessionId:data.session.id})
        }
    };
  return (
    <div className='py-5'>
        <button className='py-3 px-3 bg-green-500'
        onClick={handleCheckout}>Check out</button>
    </div>
  )
}

export default StripeCheckOutButton;