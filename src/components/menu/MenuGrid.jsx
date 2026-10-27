import FoodCard from './FoodCard';
import { EmptyState } from '../common/States';
export default function MenuGrid({ items }) { return items.length ? <div className="food-grid">{items.map((item) => <FoodCard key={item.id} item={item}/>)}</div> : <EmptyState title="No cravings matched" text="Try a different search or category and we'll find your next favourite."/>; }
