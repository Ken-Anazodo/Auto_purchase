import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user interface
interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  role: "seller" | "buyer" | "admin";
  profileCompletion?: {
    isComplete: boolean;
    percentage: number;
  };
  // Add other user properties as needed
}

interface UserState {
  userInfo: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: UserState = {
  userInfo: null,
  isAuthenticated: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateUserProfileCompletion: (
      state,
      action: PayloadAction<{ isComplete: boolean; percentage: number }>
    ) => {
      if (state.userInfo) {
        state.userInfo.profileCompletion = action.payload;
      }
    },
  },
});

export const {
  setUserInfo,
  clearUserInfo,
  setLoading,
  updateUserProfileCompletion,
} = userSlice.actions;
export default userSlice.reducer;

// Type exports
export type { User, UserState };
