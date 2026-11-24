import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isSessionExpiredModalOpen: boolean;
}

const initialState: AppState = {
  isSessionExpiredModalOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showSessionExpiredModal: (state) => {
      state.isSessionExpiredModalOpen = true;
    },
    hideSessionExpiredModal: (state) => {
      state.isSessionExpiredModalOpen = false;
    },
  },
});

export const { showSessionExpiredModal, hideSessionExpiredModal } = appSlice.actions;

export default appSlice.reducer;
