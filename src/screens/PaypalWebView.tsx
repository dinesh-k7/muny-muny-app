import React from 'react';
import WebView from 'react-native-webview';

import {OverlaySpinner} from '@muny-components/native';
import {BillingRoutes} from '../navigation/routes';

export const PaypalWebView: React.FC<any> = ({route, navigation}) => {
  const {
    params: {approvalUrl},
  } = route;
  // Paypal callback function
  const stateChng = (navState: any) => {
    const {url} = navState;
    if (url.includes('https://alpha.muny-muny.com/muny-landing/return')) {
      navigation.navigate(BillingRoutes.BILLING, {
        screen: BillingRoutes.PAYMENT_STATUS,
        params: {isSuccess: true},
      });
    } else if (url.includes('https://alpha.muny-muny.com/muny-landing/cancel')) {
      navigation.navigate(BillingRoutes.BILLING, {
        screen: BillingRoutes.PAYMENT_STATUS,
        params: {isSuccess: false},
      });
    }
  };
  return (
    <WebView
      startInLoadingState={true}
      onNavigationStateChange={stateChng}
      renderLoading={() => <OverlaySpinner />}
      source={{
        uri: approvalUrl,
      }}
    />
  );
};
