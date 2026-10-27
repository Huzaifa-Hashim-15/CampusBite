import { Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const { cartCount } = useCart(); const [open, setOpen] = useState(false);
  return <header className="site-header"><Link className="wordmark" to="/">Crave<span>Corner</span><i>.</i></Link><button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? 'nav-open' : ''}><NavLink to="/" end onClick={() => setOpen(false)}>Menu</NavLink><NavLink to="/favourites" onClick={() => setOpen(false)}><Heart size={16}/> Favourites</NavLink><NavLink className="cart-link" to="/cart" onClick={() => setOpen(false)}><ShoppingBag size={17}/> Cart <b>{cartCount}</b></NavLink><Link className="button button-small" to="/#menu" onClick={() => setOpen(false)}>Order now</Link></nav></header>;
}
