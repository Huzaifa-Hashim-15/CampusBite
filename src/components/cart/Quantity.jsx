import { Minus, Plus } from 'lucide-react';
export default function Quantity({ value, onDecrease, onIncrease }) { return <div className="quantity"><button aria-label="Decrease quantity" onClick={onDecrease}><Minus size={15}/></button><span>{value}</span><button aria-label="Increase quantity" onClick={onIncrease}><Plus size={15}/></button></div>; }
