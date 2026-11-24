import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isSidebarOpen: boolean;
}

const initialState: UIState = {
  isSidebarOpen: false
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openSideBar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSideBar: (state) => {
      state.isSidebarOpen = false;
    }
  }
});

export const { toggleSidebar, closeSideBar, openSideBar } = filterSlice.actions;
export default filterSlice.reducer;
