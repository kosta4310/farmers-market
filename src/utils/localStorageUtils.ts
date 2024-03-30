export function setLocalStorageItem(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting value to local storage:', error);
  }
}

export function getLocalStorageItem(key: string) {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error getting value from local storage:', error);
    return null;
  }
}

export function removeLocalStorageItem(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing value from local storage:', error);
  }
}
