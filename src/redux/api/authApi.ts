import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SignupData} from 'src/models/auth.model';

import {environment} from '../../constants/environment';
import {LoginResponse} from './types';

export const authApi = createApi({
  reducerPath: 'auth',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${environment.BASE_URL}`,
  }),
  endpoints: builder => ({
    signup: builder.mutation<null, SignupData>({
      query(post) {
        return {
          url: 'auth/signup',
          body: post,
          method: 'POST',
        };
      },
    }),

    login: builder.mutation({
      query(post) {
        return {
          url: 'auth/login',
          body: post,
          method: 'POST',
        };
      },
      transformResponse: (result: LoginResponse) => {
        return result;
      },
    }),
  }),
});

export const {useSignupMutation, useLoginMutation} = authApi;
