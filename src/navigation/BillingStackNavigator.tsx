import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import {BillingScreen} from '@muny-screens/BillingScreen';
import {PaypalWebView} from '@muny-screens/PaypalWebView';
import {PaymentStatus} from '@muny-components/native';
import {Colors} from '@muny-styles/global-styles';
import {BillingRoutes} from './routes';

const BillingStack = createNativeStackNavigator();

export const BillingStackNavigator = () => {
  return (
    <BillingStack.Navigator
      screenOptions={{
        title: '',
        headerShadowVisible: true,
        contentStyle: styles.header,
        headerTitleStyle: styles.title,
      }}>
      <BillingStack.Screen
        name={BillingRoutes.PLANS}
        component={BillingScreen}
        options={{title: 'Billing'}}
      />
      <BillingStack.Screen
        name={BillingRoutes.PAYPAL}
        component={PaypalWebView}
        options={{title: '', headerShown: false}}
      />
      <BillingStack.Screen
        name={BillingRoutes.PAYMENT_STATUS}
        component={PaymentStatus}
        options={{title: 'Payment'}}
      />
    </BillingStack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    borderTopColor: Colors.GRAY_LIGHT,
    borderWidth: 1,
  },
  title: {
    color: Colors.GREEN_LIGHT,
    fontWeight: 'bold',
  },
});
