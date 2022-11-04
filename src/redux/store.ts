import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './api/authApi';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authState: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({}).concat([authApi.middleware]);
  },
});
