import AsyncStorage from '@react-native-async-storage/async-storage';
import create, {StateCreator} from 'zustand';
import {persist, PersistOptions} from 'zustand/middleware';

export type AuthState = {
  token: string;
  userId: number;
  isUserLoggedIn: boolean;
  isOnboardingViewed: boolean;
  setToken: (token: string) => void;
  setUserId: (userId: number) => void;
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
  setIsOnboardingViewed: (isOnboardingViewed: boolean) => void;
};

type AuthPersist = (
  config: StateCreator<AuthState>,
  options: PersistOptions<AuthState>,
) => StateCreator<AuthState>;

export const authStore = create<AuthState>(
  (persist as AuthPersist)(
    set => ({
      token: '',
      userId: 0,
      isUserLoggedIn: false,
      isOnboardingViewed: true,
      setToken: (token: string) => set({token}),
      setUserId: (userId: number) => set({userId}),
      setIsUserLoggedIn: (isUserLoggedIn: boolean) => set({isUserLoggedIn}),
      setIsOnboardingViewed: (isOnboardingViewed: boolean) =>
        set({isOnboardingViewed}),
    }),
    {
      name: 'auth-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default authStore;
