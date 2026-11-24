import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BulkSelectionState {
  isBulk: boolean;
  selectedItems: number[];
}

const initialState: BulkSelectionState = {
  isBulk: false,
  selectedItems: [],
};

const bulkSelectionSlice = createSlice({
  name: "bulkSelection",
  initialState,
  reducers: {
    toggleBulkMode: (state) => {
      state.isBulk = !state.isBulk;
      if (!state.isBulk) {
        state.selectedItems = [];
      }
    },
    setBulkMode: (state, action: PayloadAction<boolean>) => {
      state.isBulk = action.payload;
      if (!action.payload) {
        state.selectedItems = [];
      }
    },
    addToSelection: (state, action: PayloadAction<number>) => {
      if (!state.selectedItems.includes(action.payload)) {
        state.selectedItems.push(action.payload);
      }
    },
    removeFromSelection: (state, action: PayloadAction<number>) => {
      state.selectedItems = state.selectedItems.filter(
        (id) => id !== action.payload
      );
    },
    clearSelection: (state) => {
      state.selectedItems = [];
    },
    selectAll: (state, action: PayloadAction<number[]>) => {
      state.selectedItems = action.payload;
    },
  },
});

export const {
  toggleBulkMode,
  setBulkMode,
  addToSelection,
  removeFromSelection,
  clearSelection,
  selectAll,
} = bulkSelectionSlice.actions;

export default bulkSelectionSlice.reducer;
