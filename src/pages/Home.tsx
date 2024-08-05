import ProductsSection from "../components/ProductsSection.tsx";
import CategoriesSection from "../components/CategoriesSection.tsx";
import { useGetQuery } from "../redux/slices/apiSlice.ts";

export default function Home() {
  const { data: salesProducts, isFetching: salesProductsFetching } =
    useGetQuery("/products/?isSale=true");
  const { data: newProducts, isFetching: newProductsFetching } = useGetQuery(
    "/products/?isNew=true",
  );

  return (
    <>
      <CategoriesSection />
      <ProductsSection
        title="Discounts"
        products={{ items: salesProducts, loading: salesProductsFetching }}
      />
      <div className="border-b h-1 my-4"></div>
      <ProductsSection
        title="Newnesses"
        products={{ items: newProducts, loading: newProductsFetching }}
      />
    </>
  );
}
