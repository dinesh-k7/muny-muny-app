import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {BottomTabNavigator} from './BottomTabNavigator';

const Drawer = createDrawerNavigator();
console.log('ddd', Drawer);
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
      <Drawer.Screen
        name={'MyRewardsStackNavigator'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'My Rewards Screen',
        }}
      />
    </Drawer.Navigator>
  );
};
