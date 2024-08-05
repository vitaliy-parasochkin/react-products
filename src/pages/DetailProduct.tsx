import { AiFillStar } from "react-icons/ai";
import ProductPrice from "../components/ProductPrice.tsx";
import { useAppDispatch, useAppSelector, useModal } from "../hooks";
import DetailProductSlider from "../components/DetailProductSlider.tsx";
import { useGetQuery } from "../redux/slices/apiSlice.ts";
import { useParams } from "react-router";
import Button from "../components/ButtonItem.tsx";
import { BsCart, BsCartCheck } from "react-icons/bs";
import { addCartProduct } from "../redux/slices/cartProductsSlice.ts";
import CartModal from "../components/CartModal.tsx";
import DetailProductSkeleton from "../components/DetailProductSkelton.tsx";
import NoData from "../components/NoData.tsx";

export default function DetailProduct() {
  const { isOpen, openModal, closeModal } = useModal();
  const { id } = useParams();
  const { data, isFetching } = useGetQuery(`/products/${id}/`);
  const cartProducts = useAppSelector((state) => state.cartProducts.items);
  const cartProduct = cartProducts?.find((item) => item.id == id);
  const dispatch = useAppDispatch();

  const handlerAddToCart = () => {
    if (!cartProduct) {
      dispatch(addCartProduct(data));
    }
    openModal();
  };

  return isFetching ? (
    <DetailProductSkeleton />
  ) : data ? (
    <>
      <div className="grid grid-cols-[65%_35%] gap-x-3">
        <DetailProductSlider images={data?.images} />
        <div className="flex flex-col items-start">
          <h3 className="">{data?.name}</h3>
          <div className="flex gap-x-2">
            <div className="text-yellow-400 flex items-center gap-x-0.5">
              {Array.from({ length: 5 }, (_, index) => (
                <AiFillStar
                  key={index}
                  className={
                    index < data.averageRating
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }
                />
              ))}
            </div>
            <span className="text-gray-500 font-medium">
              ({data.reviewsCount} Reviews)
            </span>
          </div>
          <ProductPrice
            price={data?.price}
            discountPrice={data?.discountPrice}
            className="flex-row items-center gap-x-2"
          />
          <p className="text-sm pb-2 border-b mb-2">{data?.description}</p>
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
  ) : (
    <NoData text="No data for detail product" />
  );
}
