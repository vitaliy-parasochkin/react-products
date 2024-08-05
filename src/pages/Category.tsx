import { useParams } from "react-router";
import { useGetQuery } from "../redux/slices/apiSlice.ts";
import ProductItem from "../components/ProductItem.tsx";
import ProductItemSkeleton from "../components/ProductItemSkeleton.tsx";
import NoData from "../components/NoData.tsx";
import { IProductItem } from "../types";

export default function Category() {
  const { categoryName } = useParams();
  const { data, isFetching } = useGetQuery(
    `/products/?category=${categoryName}`,
  );

  return (
    <>
      <h3 className="mb-3 text-xl font-medium first-letter:uppercase">
        {categoryName?.replaceAll("-", " ")}
        {data?.length > 0 ? `${data?.length}` : ""}
      </h3>
      <div className="grid 2xl:grid-cols-6 sm:grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-3">
        {isFetching ? (
          [...Array(10)].map((_, i) => <ProductItemSkeleton key={i} />)
        ) : data ? (
          data.map((item: IProductItem) => (
            <ProductItem {...item} key={item.id} />
          ))
        ) : (
          <NoData text="No products in this category" />
        )}
      </div>
    </>
  );
}
