export interface LoginResponse {
  token?: string;
}

export interface PaypalAuthResponse {
  scope: string;
  access_token: string;
  token_type: string;
  app_id: string;
  expires_in: number;
  nonce: string;
}

interface Links {
  href: string;
  rel: string;
  method: string;
}

export interface CreateSubscriptionResponse {
  status: string;
  status_update_time: string;
  id: string;
  plan_id: string;
  start_time: string;
  quantity: string;
  subscriber: {};
  create_time: string;
  plan_overridden: boolean;
  links: Links[];
}

export interface CreateSubscriptionData {
  plan_id: string;
  application_context: {
    brand_name: string;
    locale: string;
    return_url: string;
    cancel_url: string;
  };
  access_token: string;
}
