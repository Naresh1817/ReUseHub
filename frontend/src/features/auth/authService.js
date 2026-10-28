import { axiosClient } from '../../lib/axiosClient';

const USE_MOCK = true;

export const authService = {
  async login(email, password) {
    if (USE_MOCK) {
      await new Promise(r => setTimeout(r, 200));
      const mockUser = {
        id: 101,
        email,
        fullName: email.split('@')[0] || 'Demo User',
        communityTag: 'North Campus',
        role: 'ROLE_USER'
      };
      const mockToken = 'mock_jwt_token_sample_' + Date.now();
      localStorage.setItem('reusehub_token', mockToken);
      localStorage.setItem('reusehub_user', JSON.stringify(mockUser));
      return { user: mockUser, token: mockToken };
    }

    const response = await axiosClient.post('/auth/login', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('reusehub_token', token);
    localStorage.setItem('reusehub_user', JSON.stringify(user));
    return response.data;
  },

  async register(data) {
    if (USE_MOCK) {
      await new Promise(r => setTimeout(r, 300));
      const mockUser = {
        id: Date.now(),
        email: data.email,
        fullName: data.fullName,
        communityTag: data.communityTag || 'Community Member',
        role: 'ROLE_USER'
      };
      const mockToken = 'mock_jwt_token_sample_' + Date.now();
      localStorage.setItem('reusehub_token', mockToken);
      localStorage.setItem('reusehub_user', JSON.stringify(mockUser));
      return { user: mockUser, token: mockToken };
    }

    const response = await axiosClient.post('/auth/register', data);
    return response.data;
  },

  logout() {
    localStorage.removeItem('reusehub_token');
    localStorage.removeItem('reusehub_user');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('reusehub_user');
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }
};
