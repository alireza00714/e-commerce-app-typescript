export interface ICarouselData {
  id: number;
  imageSrc: string;
}

export interface ICarousel {
  data: ICarouselData[];
}

interface ISentCartProduct {
  id: string;
  title: string;
  image: string;
  price: number;
}

export interface ICartProduct extends ISentCartProduct {
  quantity: number;
  totalPrice: number;
}

export interface IProduct {
  id: string;
  title: string;
  underTitle: string;
  description?: string;
  brand: string;
  category: string;
  quantity: number;
  image1: string;
  image2?: string;
  image3?: string;
  price: number;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  cart: Product[];
}
