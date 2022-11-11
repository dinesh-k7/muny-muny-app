import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '@muny-screens/auth/LoginScreen';
import {SignupScreen} from '@muny-screens/auth/SignupScreen';
import {BillingScreen} from '@muny-screens/BillingScreen';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{title: ''}} initialRouteName="Billing">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShadowVisible: false, headerBackTitleVisible: false}}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
      <AuthStack.Screen name="Billing" component={BillingScreen} options={{title: 'Billing'}} />
    </AuthStack.Navigator>
  );
};
