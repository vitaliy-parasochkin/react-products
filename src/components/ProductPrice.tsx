import { IProductItem } from "../types";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface IProductPrice {
  price: IProductItem["price"];
  className?: string;
  discountPrice: IProductItem["discountPrice"];
}
export default function ProductPrice({
  price,
  discountPrice,
  className,
}: IProductPrice) {
  return (
    <div
      className={twMerge(
        "flex flex-col-reverse font-medium text-md leading-none",
        className,
      )}
    >
      {discountPrice && (
        <span className="text-red-500 text-xl">${discountPrice}</span>
      )}
      <span
        className={clsx("text-gray-500", {
          ["line-through"]: discountPrice,
          ["text-xl"]: !discountPrice,
        })}
      >
        ${price}
      </span>
    </div>
  );
}
