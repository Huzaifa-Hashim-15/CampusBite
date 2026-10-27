import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMenu } from '../services/menuService';
import { useCart } from '../context/CartContext';
import MenuGrid from '../components/menu/MenuGrid';
import { Loading } from '../components/common/States';
export default function Favourites() { const { favourites } = useCart(); const [items, setItems] = useState(); useEffect(() => { fetchMenu().then(setItems); }, []); return <main className="simple-page"><div className="page-heading"><p className="eyebrow">Saved for later</p><h1>Your favourites<span>.</span></h1><p>The dishes you never want to lose.</p></div>{!items ? <Loading/> : <MenuGrid items={items.filter((item) => favourites.includes(item.id))}/>} {!favourites.length && <Link className="text-link centre-link" to="/">Explore the menu ↗</Link>}</main>; }
