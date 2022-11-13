import {configureStore} from '@reduxjs/toolkit';

import {authApi} from './api/authApi';
import {paypalApi} from './api/paypalApi';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [paypalApi.reducerPath]: paypalApi.reducer,
    authState: authReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({}).concat([authApi.middleware, paypalApi.middleware]);
  },
});
