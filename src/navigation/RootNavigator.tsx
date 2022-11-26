/* eslint-disable indent */
import React from 'react';
import {NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStackNavigator} from './stack-navigators/AuthStackNavigator';
import {BillingStackNavigator} from './stack-navigators/BillingStackNavigator';
import {DrawerNavigator} from './DrawerNavigator';
import {AuthRoutes, BillingRoutes, Tabs} from './routes';
import {BottomTabNavigator} from './BottomTabNavigator';

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
      <Stack.Navigator screenOptions={{title: '', headerShown: false}} initialRouteName={Tabs.TABS}>
        <Stack.Screen
          name={AuthRoutes.AUTH}
          component={AuthStackNavigator}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerBackVisible: true,
          })}
        />
        <Stack.Screen name={BillingRoutes.BILLING} component={BillingStackNavigator} />
        <Stack.Screen name={Tabs.TABS} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
