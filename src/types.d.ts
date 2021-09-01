export interface ICarouselData {
  id: number;
  imageSrc: string;
}

export interface ICarousel {
  data: ICarouselData[];
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

export interface User {
  id: string;
  username: string;
  password: string;
  registrationDate: string;
  email: string;
  cart: Product[];
}
