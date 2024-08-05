import CartItem from "./CartItem.tsx";
import { useAppSelector } from "../hooks";

export default function CartProducts() {
  const cartProducts = useAppSelector((state) => state.cartProducts.items);

  return (
    <>
      <div className="grid grid-cols-[40%_20%_20%_20%] gap-x-3 shadow p-4">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      {cartProducts.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </>
  );
}
