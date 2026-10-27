import { Clock, Heart, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
export default function FoodCard({ item }) {
  const { addToCart, toggleFavourite, isFavourite } = useCart();
  return <article className="food-card"><Link to={`/menu/${item.id}`} className="food-image"><img src={item.image} alt={item.name}/>{item.isPopular && <span className="badge">Popular</span>}</Link><div className="food-card-body"><div className="card-title-row"><Link to={`/menu/${item.id}`}><h3>{item.name}</h3></Link><button className={`icon-button ${isFavourite(item.id) ? 'active' : ''}`} aria-label={`${isFavourite(item.id) ? 'Remove' : 'Add'} ${item.name} ${isFavourite(item.id) ? 'from' : 'to'} favourites`} onClick={() => toggleFavourite(item.id)}><Heart size={18} fill={isFavourite(item.id) ? 'currentColor' : 'none'}/></button></div><p>{item.description}</p><div className="card-meta"><span><Star size={14} fill="currentColor"/> {item.rating}</span><span><Clock size={14}/> {item.preparationTime}</span></div><div className="card-bottom"><strong>PKR {item.price.toLocaleString()}</strong><button className="add-button" onClick={() => addToCart(item)} aria-label={`Add ${item.name} to cart`}><Plus size={18}/></button></div></div></article>;
}
