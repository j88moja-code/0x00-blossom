// import { create } from "zustand";
// import type { User } from "../client";

// interface AuthState {
//   accessToken: string | null;
//   refreshToken: string | null;
//   user: User | null;
//   setAccessToken: (token: string) => void;
//   setRefreshToken: (token: string) => void;
//   setUser: (user: User | null) => void;
//   clearAuth: () => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   accessToken: null,
//   refreshToken: null,
//   user: null,
//   setAccessToken: (token: string) => set({ accessToken: token }),
//   setRefreshToken: (token: string) => set({ refreshToken: token }),
//   setUser: (user: User | null) => set({ user }),
//   clearAuth: () => set({ accessToken: null, refreshToken: null, user: null }),
// }));
