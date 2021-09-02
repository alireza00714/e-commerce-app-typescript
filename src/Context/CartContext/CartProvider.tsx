import React, { createContext, useState, FC } from "react";
import { ICartProduct, ISentCartProduct } from "../../types";
import { CartContextState } from "./types";

const contextDefaultValues: CartContextState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
  addToCart: (item: ISentCartProduct) => {},
  resetCart: () => {},
  deleteItem: (id: string) => {},
  deleteWholeItem: (id: string) => {},
};

export const CartContext =
  createContext<CartContextState>(contextDefaultValues);

const ContextProvider: FC = ({ children }) => {
  const [items, setItems] = useState<ICartProduct[]>(
    contextDefaultValues.items
  );
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  const addToCart = (cartItem: ISentCartProduct) => {
    const existingItem = items.find((item) => item.id === cartItem.id);
    if (existingItem) {
      setItems([
        ...items.map((item) =>
          item.id === existingItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.price * (item.quantity + 1),
              }
            : item
        ),
      ]);
      setTotalQuantity((prevState) => prevState + 1);
      setTotalCost((prevState) => prevState + existingItem.price);
    } else {
      setItems([
        ...items,
        { ...cartItem, quantity: 1, totalPrice: cartItem.price },
      ]);
      setTotalQuantity((prevState) => prevState + 1);
      setTotalCost((prevState) => prevState + cartItem.price);
    }
  };

  const deleteItem = (id: string) => {
    const itemToDelete = items.find((item) => item.id === id);
    if (itemToDelete!.quantity > 1) {
      setItems([
        ...items.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.price * (item.quantity - 1),
              }
            : item
        ),
      ]);
      setTotalQuantity((prevState) => prevState - 1);
      setTotalCost((prevState) => prevState - itemToDelete!.price);
    } else {
      setItems([...items.filter((item) => item.id !== itemToDelete!.id)]);
      setTotalQuantity((prevState) => prevState - 1);
      setTotalCost((prevState) => prevState - itemToDelete!.price);
    }
  };

  const deleteWholeItem = (id: string) => {
    const itemToDelete = items.find((item) => item.id === id);
    setItems([...items.filter((item) => item.id !== itemToDelete!.id)]);
    setTotalCost((prevState) => prevState - itemToDelete!.totalPrice);
    setTotalQuantity((prevState) => prevState - itemToDelete!.quantity);
  };

  const resetCart = () => {
    setItems([]);
    setTotalCost(0);
    setTotalQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalCost,
        totalQuantity,
        addToCart,
        resetCart,
        deleteItem,
        deleteWholeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
