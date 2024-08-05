import React from "react";

export interface IProductItem {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  reviewsCount: number;
  averageRating: number;
  discountPercentage?: number;
  isNew: boolean;
  isSale: boolean;
  category: string;
  images: string[];
}

export interface ICartProductItem extends IProductItem {
  count: number;
}

export interface cartProductSliceInitState {
  items: ICartProductItem[];
}

export interface ICartItemCount {
  count: ICartProductItem["count"];
  id: ICartProductItem["id"];
}

export interface ModalTitleProps {
  closeModal: () => void;
  children: React.ReactNode;
}

export interface ModalProps extends ModalTitleProps {
  isOpen: boolean;
}

export interface CartModalProps
  extends Pick<ModalProps, "isOpen" | "closeModal"> {
  cartProducts: ICartProductItem[];
}
