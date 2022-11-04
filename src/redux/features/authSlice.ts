import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  auth: null;
}

const initialState: IAuthState = {
  auth: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    authState: (state, action: PayloadAction<null>) => {
      state.auth = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { authState } = authSlice.actions;
