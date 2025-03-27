
/**
 * Persistent storage utility that saves data across sessions
 * This can be extended to connect to a backend database in the future
 */

// The base path for persistent data
const DATA_PATH = '/app/data';

// Simulate persistent storage with localStorage as fallback
export const persistentStorage = {
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
      console.log(`Saved data to key: ${key}`);
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  },
  
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Failed to retrieve data:', error);
      return null;
    }
  },
  
  removeItem: (key: string): void => {
    try {
      localStorage.setItem(key, '');
      console.log(`Removed data from key: ${key}`);
    } catch (error) {
      console.error('Failed to remove data:', error);
    }
  }
};

// Auto-login utility
export const autoAuth = {
  // Set a default user state in storage
  initialize: () => {
    const existingUser = persistentStorage.getItem('user');
    if (!existingUser) {
      // Create a default user object
      const defaultUser = {
        id: 'default-user',
        name: 'User',
        isAuthenticated: true,
        timestamp: new Date().toISOString()
      };
      persistentStorage.setItem('user', JSON.stringify(defaultUser));
      console.log('Auto-initialized default user');
    }
    return JSON.parse(persistentStorage.getItem('user') || '{}');
  },

  // Get the current user
  getUser: () => {
    const userData = persistentStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const user = autoAuth.getUser();
    return user && user.isAuthenticated === true;
  }
};
