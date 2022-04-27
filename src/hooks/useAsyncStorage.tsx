import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [storageItem, setStorageItem] = useState<T>(initialValue);

  // initialize
  useEffect(() => {
    AsyncStorage.getItem(key).then((value: any) => {
      if (value !== null) {
        try {
          const parsed = JSON.parse(value);
          setStorageItem(parsed);
          return parsed;
        } catch (e) {
          setStorageItem(value);
          return value;
        }
      } else {
        return updateStorageItem(initialValue);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStorageItem = (data: T): Promise<T> => {
    if (typeof data === 'string') {
      return AsyncStorage.setItem(key, data)
        .then(() => setStorageItem(data))
        .then(() => data);
    } else {
      try {
        const stringified = JSON.stringify(data);
        return AsyncStorage.setItem(key, stringified)
          .then(() => setStorageItem(data))
          .then(() => data);
      } catch (e) {
        setStorageItem(data);
        return Promise.resolve(data);
      }
    }
  };

  return [storageItem, updateStorageItem] as const;
};
