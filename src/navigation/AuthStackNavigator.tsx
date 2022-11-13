import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import {LoginScreen} from '@muny-screens/auth/LoginScreen';
import {SignupScreen} from '@muny-screens/auth/SignupScreen';
import {AuthRoutes} from './routes';
import {Colors} from '@muny-styles/global-styles';

const Stack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerShadowVisible: true,
        contentStyle: styles.header,
        headerTitleStyle: styles.title,
      }}>
      <Stack.Screen
        name={AuthRoutes.LOGIN}
        component={LoginScreen}
        options={{headerBackTitleVisible: false, title: AuthRoutes.LOGIN}}
      />
      <Stack.Screen
        name={AuthRoutes.SIGNUP}
        component={SignupScreen}
        options={{
          title: AuthRoutes.SIGNUP,
        }}
      />
    </Stack.Navigator>
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
