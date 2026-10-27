import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Favourites from './pages/Favourites';
import Checkout from './pages/Checkout';
import './styles.css';
export default function App() { return <BrowserRouter><CartProvider><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/menu/:id" element={<Detail/>}/><Route path="/favourites" element={<Favourites/>}/><Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="*" element={<main className="simple-page"><h1>Page not found<span>.</span></h1></main>}/></Routes><Footer/></CartProvider></BrowserRouter>; }
