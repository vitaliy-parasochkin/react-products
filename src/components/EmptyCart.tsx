import React from "react";
import imgEmptyCart from "../assets/emptyCart.jpg";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imgEmptyCart} alt="empty cart" width={500} height={500} />
      <span>Your cart is empty</span>
    </div>
  );
}
