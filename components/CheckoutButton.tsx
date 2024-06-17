"use client"
import usePaddle from "@/lib/hooks/paddle";
export default function CheckoutButton() {
  const paddle = usePaddle();

  const openCheckout = () => {
    paddle?.Checkout.open({
      items: [
        {
          priceId: "pri_01j0gz4shrxc3p80asvr5e2pz2", // you can find it in the product catalog
          quantity: 1,
        },
      ],
      customer: {
        email: "manojbajaj95@gmail.com" // email of your current logged in user
      },

    });
  };

  return (
    <button
      onClick={openCheckout}
    >
      Checkout
    </button>
  );
}