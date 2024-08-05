import Button from "./ButtonItem.tsx";
import { NavLink } from "react-router-dom";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Badge from "./Badge.tsx";
import { IProductItem } from "../types";
import { useAppDispatch, useAppSelector, useModal } from "../hooks";
import { addCartProduct } from "../redux/slices/cartProductsSlice.ts";
import ProductPrice from "./ProductPrice.tsx";
import IconButton from "./IconButton.tsx";
import { toggleProduct } from "../redux/slices/favoriteProductsSlice.ts";
import clsx from "clsx";
import Modal from "./Modal.tsx";
import ModalTitle from "./ModalTitle.tsx";
import CartProducts from "./CartProducts.tsx";
import CartTotal from "./CartTotal.tsx";
import ButtonItem from "./ButtonItem.tsx";
import CartModal from "./CartModal.tsx";

export default function ProductItem({
  id,
  name,
  images,
  price,
  isNew,
  discountPrice,
  reviewsCount,
  averageRating,
  discountPercentage,
}: IProductItem) {
  const { isOpen, openModal, closeModal } = useModal();
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartProducts.items);
  const cartProduct = cartProducts?.find((item) => item.id === id);
  const favoriteProduct = useAppSelector((state) =>
    state.favoriteProducts.items.find((item) => item.id === id),
  );

  const handlerAddToCart = () => {
    if (!cartProduct) {
      dispatch(
        addCartProduct({
          id,
          name,
          images,
          price,
          discountPrice,
          reviewsCount,
          averageRating,
          discountPercentage,
        }),
      );
    }
    openModal();
  };

  const handleFavoriteProduct = () => {
    dispatch(
      toggleProduct({
        id,
        name,
        images,
        price,
        discountPrice,
        reviewsCount,
        averageRating,
        discountPercentage,
      }),
    );
  };

  return (
    <>
      <div className="flex flex-col rounded gap-y-1 relative border pb-2">
        <div className="absolute top-2 left-2 flex items-center gap-x-2">
          {discountPercentage > 0 && (
            <Badge variant="danger">-{discountPercentage}%</Badge>
          )}
          {isNew > 0 && <Badge variant="success">new</Badge>}
        </div>
        <IconButton
          variant="light"
          className={clsx("absolute right-2 top-2 border border-white", {
            ["text-red-500 border border-red-500"]: favoriteProduct,
          })}
          onClick={handleFavoriteProduct}
        >
          <AiOutlineHeart />
        </IconButton>
        <div className="p-4 w-full h-44 flex">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <NavLink
          title={name}
          to={`/products/${id}`}
          className="wrap-title text-base font-medium leading-4 min-h-8 px-1"
        >
          {name}
        </NavLink>
        <div className="flex gap-x-2 px-1">
          <div className="text-yellow-400 flex items-center gap-x-0.5">
            {Array.from({ length: 5 }, (_, index) => (
              <AiFillStar
                key={index}
                className={
                  index < averageRating ? "text-yellow-400" : "text-gray-500"
                }
              />
            ))}
          </div>
          <span className="text-gray-500 font-medium">({reviewsCount})</span>
        </div>
        <div className="flex justify-between items-center px-1 min-h-11">
          <ProductPrice price={price} discountPrice={discountPrice} />
          <Button
            variant="dark"
            className="px-2 py-2 rounded text-xl"
            onClick={handlerAddToCart}
          >
            {cartProduct ? <BsCartCheck /> : <BsCart />}
          </Button>
        </div>
      </div>
      <CartModal
        isOpen={isOpen}
        closeModal={closeModal}
        cartProducts={cartProducts}
      />
    </>
  );
}
