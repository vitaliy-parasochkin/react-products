import { ICartProductItem } from "../types";
import ProductPrice from "./ProductPrice.tsx";
import CartItemCount from "./CartItemCount.tsx";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { deleteCartProduct } from "../redux/slices/cartProductsSlice.ts";
import IconButton from "./IconButton.tsx";
import { IoClose } from "react-icons/io5";

export default function CartItem({
  id,
  images,
  name,
  discountPrice,
  price,
  count,
}: ICartProductItem) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteCartProduct(id));
  };

  return (
    <div className="grid grid-cols-[40%_20%_20%_20%] gap-x-3 shadow p-4 relative group">
      <IconButton
        variant="light"
        className="flex leading-none items-center justify-center bg-red-600 hover:bg-red-400 rounded-full  absolute top-1 left-1 text-white invisible group-hover:visible p-1"
        onClick={handleDelete}
      >
        <IoClose />
      </IconButton>
      <div className="grid grid-cols-[20%_80%] gap-x-2">
        <div className="h-12 flex">
          <img
            src={images[0]}
            alt="cart img"
            className="w-full h-full object-contain"
          />
        </div>
        <NavLink to={`/products/${id}/`} className="wrap-title" title={name}>
          {name}
        </NavLink>
      </div>

      <ProductPrice
        price={price}
        discountPrice={discountPrice}
        className="justify-center"
      />
      <div className="flex items-center">
        <CartItemCount id={id} count={count} />
      </div>
      <p className="flex items-center">${(discountPrice || price) * count}</p>
    </div>
  );
}
