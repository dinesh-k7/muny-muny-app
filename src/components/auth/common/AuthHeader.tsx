/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {CommonStyles} from '@muny-styles/global-styles';

interface Props {
  isLogin: boolean;
}
export const AuthHeader: React.FC<Props> = ({isLogin}) => {
  return (
    <View style={styles.authHeaderContainer}>
      <Image source={require('@muny-assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.text}> {isLogin ? 'Welcome Back!' : 'Create New Account'}</Text>
      <Text style={[CommonStyles.regularText, {marginLeft: 8}]}>
        {isLogin ? 'Please login to your account' : 'Please register with us'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  authHeaderContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: 160,
  },
  text: {
    ...CommonStyles.headingText,
    fontWeight: 'bold',
  },
  logo: {
    resizeMode: 'stretch',
    width: 240,
    height: 60,
    marginLeft: 8,
  },
});
