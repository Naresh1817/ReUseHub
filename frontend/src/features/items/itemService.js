import { axiosClient } from '../../lib/axiosClient';
import { INITIAL_MOCK_ITEMS } from './mockData';

// Toggle this or leave true while developing frontend without backend running
const USE_MOCK = true;

// Initialize mock storage in localStorage so added items persist during demo
const MOCK_STORAGE_KEY = 'reusehub_items_v5';

const getStoredItems = () => {
  const stored = localStorage.getItem(MOCK_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse items from storage', e);
    }
  }
  localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(INITIAL_MOCK_ITEMS));
  return INITIAL_MOCK_ITEMS;
};

export const itemService = {
  // Fetch paginated & filtered items
  async getItems({ category, type, search, sort } = {}) {
    if (USE_MOCK) {
      // Simulate network latency (200ms)
      await new Promise(r => setTimeout(r, 200));
      let items = getStoredItems();

      if (category && category !== 'all') {
        items = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
      }
      if (type && type !== 'ALL') {
        items = items.filter(item => item.listingType === type);
      }
      if (search && search.trim() !== '') {
        const q = search.toLowerCase();
        items = items.filter(item =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.pickupLocation.toLowerCase().includes(q)
        );
      }
      return {
        content: items,
        totalElements: items.length,
        totalPages: 1
      };
    }

    const response = await axiosClient.get('/items', {
      params: { category, type, search, sort }
    });
    return response.data;
  },

  // Get item by ID
  async getItemById(id) {
    if (USE_MOCK) {
      await new Promise(r => setTimeout(r, 150));
      const items = getStoredItems();
      const item = items.find(i => String(i.id) === String(id));
      if (!item) throw new Error('Item not found');
      return item;
    }
    const response = await axiosClient.get(`/items/${id}`);
    return response.data;
  },

  // Create new item listing
  async createItem(itemData) {
    if (USE_MOCK) {
      await new Promise(r => setTimeout(r, 300));
      const items = getStoredItems();
      const newItem = {
        id: Date.now(),
        ...itemData,
        status: 'AVAILABLE',
        createdAt: new Date().toISOString(),
        seller: {
          id: 999,
          name: 'Current User',
          communityTag: 'My Campus',
          rating: 5.0
        }
      };
      const updated = [newItem, ...items];
      localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(updated));
      return newItem;
    }

    const response = await axiosClient.post('/items', itemData);
    return response.data;
  },

  // Submit claim / pickup request
  async requestItem(itemId, requestNote) {
    if (USE_MOCK) {
      await new Promise(r => setTimeout(r, 250));
      // Store claim request in localStorage
      const claims = JSON.parse(localStorage.getItem('reusehub_claims') || '[]');
      const newClaim = {
        id: Date.now(),
        itemId,
        message: requestNote,
        status: 'PENDING',
        createdAt: new Date().toISOString()
      };
      claims.push(newClaim);
      localStorage.setItem('reusehub_claims', JSON.stringify(claims));
      return newClaim;
    }

    const response = await axiosClient.post(`/items/${itemId}/requests`, { message: requestNote });
    return response.data;
  }
};
