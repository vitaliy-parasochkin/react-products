import { ICartItemCount } from "../types";
import React from "react";
import { useAppDispatch } from "../hooks";
import { editCartProduct } from "../redux/slices/cartProductsSlice.ts";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const buttonClass =
  "p-2 h-full flex items-center justify-center transition hover:bg-red-400 disabled:bg-gray-200 disabled:color-gray-50";
export default function CartItemCount({ count, id }: ICartItemCount) {
  const dispatch = useAppDispatch();

  const handlerInputChange = (count: number) => {
    if (count > 0) {
      dispatch(editCartProduct({ id, count }));
    }
  };

  return (
    <div className="flex justify-start border rounded">
      <button
        className={twMerge("border-r", buttonClass)}
        disabled={count <= 1}
        onClick={() => handlerInputChange(count - 1)}
      >
        <AiOutlineMinus />
      </button>
      <input
        type="numeric"
        value={count}
        onChange={(e) => handlerInputChange(+e.target.value)}
        min={1}
        className="w-10 text-center"
      />
      <button
        className={twMerge("border-l", buttonClass)}
        onClick={() => handlerInputChange(count + 1)}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}
