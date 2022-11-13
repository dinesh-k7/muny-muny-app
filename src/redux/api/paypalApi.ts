import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {encode as btoa} from 'base-64';

import {environment} from '../../constants/environment';
import {CreateSubscriptionResponse, CreateSubscriptionData, PaypalAuthResponse} from './types';

export const paypalApi = createApi({
  reducerPath: 'paypal',
  tagTypes: ['Paypal'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${environment.PAYPAL_BASE_URL}`,
  }),
  endpoints: builder => ({
    getAccessToken: builder.mutation<PaypalAuthResponse, null>({
      query() {
        return {
          url: 'oauth2/token',
          body: 'grant_type=client_credentials',
          method: 'POST',
          headers: {
            Authorization: 'Basic ' + btoa(`${environment.CLIENT_ID}:${environment.CLIENT_SECRET}`),
          },
        };
      },
      transformResponse: (result: PaypalAuthResponse) => {
        return result;
      },
    }),
    createSubscription: builder.mutation<CreateSubscriptionResponse, CreateSubscriptionData>({
      query(post: CreateSubscriptionData) {
        const {access_token, plan_id, application_context} = post;
        return {
          url: 'billing/subscriptions',
          body: {plan_id, application_context},
          method: 'POST',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});

export const {useGetAccessTokenMutation, useCreateSubscriptionMutation} = paypalApi;
