import { useAppSelector } from "../hooks";
import ButtonItem from "../components/ButtonItem.tsx";
import { useNavigate } from "react-router-dom";
import CartTotal from "../components/CartTotal.tsx";
import CartProducts from "../components/CartProducts.tsx";
import EmptyCart from "../components/EmptyCart.tsx";

export default function Cart() {
  const cartProducts = useAppSelector((state) => state.cartProducts.items);
  const navigate = useNavigate();

  return cartProducts.length > 0 ? (
    <div className="flex flex-col py-4 gap-y-4">
      <CartProducts />
      <div className="flex justify-start mt-4">
        <ButtonItem variant="secondary-outline" onClick={() => navigate("/")}>
          Return to shop
        </ButtonItem>
      </div>
      <CartTotal />
    </div>
  ) : (
    <EmptyCart />
  );
}
