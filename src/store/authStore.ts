import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type AuthState = {
    token: string;
    userId: number;
    isOnboardingViewed: boolean;
    AnswerQuestion: boolean;
    UserName: string;
    Email: string;
    verify: boolean;
    Password: string;
    setEmail: (Email: string) => void;
    setPassword: (Password: string) => void;
    setUserName: (UserName: string) => void;
    setToken: (token: string) => void;
    setUserId: (userId: number) => void;
    setIsOnboardingViewed: (isOnboardingViewed: boolean) => void;
    setAnswerQuestion: (AnswerQuestion: boolean) => void;
    setVerify: (verify: boolean) => void;
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
            AnswerQuestion: false,
            UserName: '',
            Email: '',
            Password: '',
            verify: false,
            setPassword: (Password: string) => set({ Password }),
            setEmail: (Email: string) => set({ Email }),
            setUserName: (UserName: string) => set({ UserName }),
            setToken: (token: string) => set({ token }),
            setUserId: (userId: number) => set({ userId }),
            setIsOnboardingViewed: (isOnboardingViewed: boolean) =>
                set({ isOnboardingViewed }),
            setAnswerQuestion: (AnswerQuestion: boolean) =>
                set({ AnswerQuestion }),
            setVerify: (verify: boolean) => set({ verify }),
        }),
        {
            name: 'auth-storage',
            getStorage: () => AsyncStorage,
        },
    ),
);

export default authStore;
