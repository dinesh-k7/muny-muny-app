/* eslint-disable indent */
import React from 'react';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackNavigator} from './AuthStackNavigator';
import {BillingStackNavigator} from './BillingStackNavigator';
import {AuthRoutes, BillingRoutes} from './routes';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const getHeaderTitle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Login';
    switch (routeName) {
      case 'Login':
        return 'Login';
      case 'Signup':
        return 'Register';
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{title: '', headerShown: false}}
        initialRouteName={BillingRoutes.BILLING}>
        <Stack.Screen
          name={AuthRoutes.AUTH}
          component={AuthStackNavigator}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerBackVisible: true,
          })}
        />
        <Stack.Screen name={BillingRoutes.BILLING} component={BillingStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
