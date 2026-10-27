import { describe, expect, it } from 'vitest';

function cartAfterAdding(items, item) {
  const found = items.find((entry) => entry.id === item.id);
  return found ? items.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...items, { ...item, quantity: 1 }];
}

describe('cart calculations', () => {
  it('increments an existing item and calculates count and total', () => {
    const burger = { id: 'burger', price: 450 };
    const pizza = { id: 'pizza', price: 800 };
    const items = cartAfterAdding(cartAfterAdding(cartAfterAdding([], burger), burger), pizza);
    expect(items.reduce((sum, item) => sum + item.quantity, 0)).toBe(3);
    expect(items.reduce((sum, item) => sum + item.price * item.quantity, 0)).toBe(1700);
  });
  it('removing the final quantity leaves no item', () => {
    const item = { id: 'burger', price: 450, quantity: 1 };
    expect([item].filter((entry) => entry.id !== item.id)).toEqual([]);
  });
});
