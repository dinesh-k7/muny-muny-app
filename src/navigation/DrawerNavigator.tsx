import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {BottomTabNavigator} from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Drawer.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home Screen',
        }}
      />
    </Drawer.Navigator>
  );
};
