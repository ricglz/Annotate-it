import { useState, useCallback } from 'react';

export function useLocalStorage(key: string, initialValue: string) :
  [string, (value: (string | ((prevValue: string) => string))) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: (string | ((prevValue: string) => string))) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      return;
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}
