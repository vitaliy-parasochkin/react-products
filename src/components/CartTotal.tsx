import ButtonItem from "./ButtonItem.tsx";
import { useAppSelector } from "../hooks";

export default function CartTotal() {
  const cartProducts = useAppSelector((state) => state.cartProducts.items);

  const countSum = () => {
    return cartProducts
      ? cartProducts.reduce((acc, curr) => {
          return acc + curr.count * (curr.discountPrice || curr.price);
        }, 0)
      : 0;
  };

  return (
    <div className="flex justify-end">
      <div className="flex flex-col p-4 border border-black rounded">
        <p className="text-xl font-medium mb-3">Cart Total</p>
        <div className="flex justify-between border-b border-black mb-2 pb-2">
          <p>Subtotal:</p> <p>${countSum()}</p>
        </div>
        <div className="flex justify-between  border-b border-black mb-2 pb-2">
          <p>Shipping</p> <p>Free</p>
        </div>
        <div className="flex justify-between mb-3">
          <p>Total</p> <p>${countSum()}</p>
        </div>
        <div className="flex justify-center ">
          <ButtonItem variant="danger">Process to checkout</ButtonItem>
        </div>
      </div>
    </div>
  );
}
