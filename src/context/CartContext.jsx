import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } };

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => read('cravecorner-cart', []));
  const [favourites, setFavourites] = useState(() => read('cravecorner-favourites', []));
  useEffect(() => localStorage.setItem('cravecorner-cart', JSON.stringify(cartItems)), [cartItems]);
  useEffect(() => localStorage.setItem('cravecorner-favourites', JSON.stringify(favourites)), [favourites]);
  const addToCart = (item) => { if (!item.available) return; setCartItems((current) => { const found = current.find((entry) => entry.id === item.id); return found ? current.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...current, { ...item, quantity: 1 }]; }); };
  const removeFromCart = (id) => setCartItems((items) => items.filter((item) => item.id !== id));
  const increaseQuantity = (id) => setCartItems((items) => items.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  const decreaseQuantity = (id) => setCartItems((items) => items.flatMap((item) => item.id !== id ? item : item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []));
  const clearCart = () => setCartItems([]);
  const toggleFavourite = (id) => setFavourites((ids) => ids.includes(id) ? ids.filter((entry) => entry !== id) : [...ids, id]);
  const value = useMemo(() => ({ cartItems, favourites, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, toggleFavourite, isFavourite: (id) => favourites.includes(id), getItemQuantity: (id) => cartItems.find((item) => item.id === id)?.quantity || 0, cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0), cartTotal: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) }), [cartItems, favourites]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
