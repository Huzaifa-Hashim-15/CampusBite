export async function fetchMenu() {
  const response = await fetch('/data/menu.json');
  if (!response.ok) throw new Error('We could not load the menu. Please try again.');
  const data = await response.json();
  if (!Array.isArray(data)) throw new Error('The menu data is unavailable.');
  return data;
}

export async function fetchMenuItemById(id) {
  const items = await fetchMenu();
  const item = items.find((entry) => entry.id === id);
  if (!item) throw new Error('That dish could not be found.');
  return item;
}
