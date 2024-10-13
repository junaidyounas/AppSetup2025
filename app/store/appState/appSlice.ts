import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from './appState';

export const appSlice: any = createSlice({
  name: 'app',
  initialState: AppState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setIsLoading} =
  appSlice.actions;

export default appSlice.reducer;
