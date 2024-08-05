import { useAppSelector } from "../hooks";
import ProductItem from "../components/ProductItem.tsx";
import imgNoData from "../assets/noData.jpg";
import NoData from "../components/NoData.tsx";
import React from "react";

export default function Favorites() {
  const favoriteProducts = useAppSelector(
    (state) => state.favoriteProducts.items,
  );
  const favoriteProductsQuantity = favoriteProducts.length;

  return favoriteProductsQuantity ? (
    <>
      <h3 className="mb-3 text-xl font-medium">
        Wishlist ({favoriteProducts?.length})
      </h3>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-3">
        {favoriteProducts.map((item) => (
          <ProductItem {...item} key={item.id} />
        ))}
      </div>
    </>
  ) : (
    <NoData text="No favorite products" />
  );
}
