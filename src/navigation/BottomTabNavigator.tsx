/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';

import {Tabs} from './routes';
import {Colors} from '@muny-styles/global-styles';

const DashboardScreen = () => {
  return (
    <View>
      <Text> Dashboard screen</Text>
    </View>
  );
};

const BudgetForecastScreen = () => {
  return (
    <View>
      <Text> Budget Forecast screen</Text>
    </View>
  );
};

const WishlistScreen = () => {
  return (
    <View>
      <Text> Wishlist screen</Text>
    </View>
  );
};

const ControlBoardScreen = () => {
  return (
    <View>
      <Text> Control Board screen</Text>
    </View>
  );
};

export const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={({}) => ({
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: {paddingVertical: 8},
        tabBarStyle: {height: 64},
        tabBarLabelStyle: {fontSize: 12, fontWeight: '400'},
      })}>
      <BottomTab.Screen
        name={Tabs.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarActiveBackgroundColor: Colors.GREEN,
          tabBarIcon: ({focused}) => {
            console.log('focused', focused);
            return (
              <Image
                source={require('@muny-assets/images/dashboard-icon.png')}
                style={{tintColor: focused ? Colors.WHITE : ''}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Tabs.BUDGET_FORECAST_SCREEN}
        component={BudgetForecastScreen}
        options={{
          tabBarLabel: 'Forecast',
          tabBarActiveBackgroundColor: Colors.GREEN,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('@muny-assets/images/forecast-icon.png')}
                style={{tintColor: focused ? Colors.WHITE : ''}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Tabs.WISHLIST_SCREEN}
        component={WishlistScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarActiveBackgroundColor: Colors.GREEN,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('@muny-assets/images/wishlist-icon.png')}
                style={{tintColor: focused ? Colors.WHITE : ''}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Tabs.CONTROL_BOARD_SCREEN}
        component={ControlBoardScreen}
        options={{
          tabBarActiveBackgroundColor: Colors.GREEN,
          tabBarLabel: 'Control Board',
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('@muny-assets/images/control-board-icon.png')}
                style={{tintColor: focused ? Colors.WHITE : ''}}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
