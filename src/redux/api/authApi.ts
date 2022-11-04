import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {environment} from '../../constants/environment';
import {IRegisterResponse} from './types';

export const authApi = createApi({
  reducerPath: 'auth',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${environment.BASE_URL}`,
  }),
  endpoints: builder => ({
    signup: builder.mutation<IRegisterResponse, FormData>({
      query(post) {
        return {
          url: 'auth/signup',
          body: post,
          method: 'POST',
        };
      },
      transformResponse: (result: {data: {post: IRegisterResponse}}) => {
        return result.data.post;
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
      transformResponse: (result: IRegisterResponse) => {
        return result;
      },
    }),
  }),
});

export const {useSignupMutation, useLoginMutation} = authApi;
