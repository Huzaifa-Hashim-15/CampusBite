import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchMenu, fetchMenuItemById } from '../src/services/menuService';

describe('menu service', () => {
  beforeEach(() => vi.restoreAllMocks());
  it('loads the menu from the public data endpoint', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 'one' }] }));
    await expect(fetchMenu()).resolves.toEqual([{ id: 'one' }]);
    expect(fetch).toHaveBeenCalledWith('/data/menu.json');
  });
  it('rejects failed responses and invalid item ids', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    await expect(fetchMenu()).rejects.toThrow('could not load');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 'one' }] }));
    await expect(fetchMenuItemById('missing')).rejects.toThrow('could not be found');
  });
});
