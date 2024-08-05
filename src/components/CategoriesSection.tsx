import Categories from "./CategoriesMenu.tsx";
import HomeCategoriesSlider from "./HomeCategoriesSlider.tsx";

export default function CategoriesSection() {
  return (
    <div className="flex justify-between mb-10 min-w-0 min-h-0 ">
      <Categories />
      <HomeCategoriesSlider />
    </div>
  );
}
