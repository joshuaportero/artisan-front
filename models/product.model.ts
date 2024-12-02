export type ProductCardModel = {
  product_id: number;
  category_id: number;
  name: string;
  rating: number;
  image_main: string;
  price: number;
};

export type ProductInfoModel = {
  product_id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  image_main: string;
  images: string[] | string;
};
