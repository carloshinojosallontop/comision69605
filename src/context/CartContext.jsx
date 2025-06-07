import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + cantidad };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: cantidad }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clear, removeItem, cartTotal, cartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
