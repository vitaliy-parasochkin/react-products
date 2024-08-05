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
