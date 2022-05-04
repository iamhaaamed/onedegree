import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type AuthState = {
    token: string;
    userId: number;
    isOnboardingViewed: boolean;
    UserName: string;
    setUserName: (UserName: string) => void;
    setToken: (token: string) => void;
    setUserId: (userId: number) => void;
    setIsOnboardingViewed: (isOnboardingViewed: boolean) => void;
};

type AuthPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>,
) => StateCreator<AuthState>;

export const authStore = create<AuthState>(
    (persist as AuthPersist)(
        (set) => ({
            token: '',
            userId: 0,
            isOnboardingViewed: false,
            UserName: '',
            setUserName: (UserName: string) => set({ UserName }),
            setToken: (token: string) => set({ token }),
            setUserId: (userId: number) => set({ userId }),
            setIsOnboardingViewed: (isOnboardingViewed: boolean) =>
                set({ isOnboardingViewed }),
        }),
        {
            name: 'auth-storage',
            getStorage: () => AsyncStorage,
        },
    ),
);

export default authStore;
