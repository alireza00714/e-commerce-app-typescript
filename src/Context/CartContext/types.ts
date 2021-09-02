import { ICartProduct, ISentCartProduct } from "../../types";

export type CartContextState = {
  items: ICartProduct[];
  totalQuantity: number;
  totalCost: number;
  addToCart: (product: ISentCartProduct) => void;
  resetCart: () => void;
  deleteItem: (id: string) => void;
  deleteWholeItem: (id: string) => void;
};
