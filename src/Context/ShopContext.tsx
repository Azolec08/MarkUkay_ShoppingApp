import { ReactNode, createContext, useState } from "react";
import { PRODUCTS } from "../data/data";
import { useUserStore } from "../Store/userStore";

type useCreateContext = {
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalAmount: any;
  cartItems: any;
};

export const shopContext = createContext({} as useCreateContext);

type childrenType = {
  children: ReactNode;
};

function ShopContextProvider({ children }: childrenType) {
  const defaultCart = () => {
    let cart = [];
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const { decrementCount } = useUserStore((state) => state);

  const [cartItems, setCartItems] = useState(defaultCart());

  function addToCart(itemId: number) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeFromCart(itemId: number) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    decrementCount();
  }

  function getTotalAmount() {
    let totalAmount = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(items));
        totalAmount += cartItems[items] * itemInfo!.price;
      }
    }
    return totalAmount;
  }

  return (
    <shopContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        getTotalAmount,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}

export default ShopContextProvider;
