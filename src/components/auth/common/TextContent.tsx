import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  isLogin: boolean;
  style: Record<string, unknown>;
  onPress: () => void;
}

export const TextContent: React.FC<Props> = ({isLogin, style, onPress}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        {!isLogin ? 'Already have an account?' : 'Did not have any account?'}
        <Text style={style} onPress={onPress}>
          {' '}
          {!isLogin ? 'Log In' : 'Sign up'}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 24,
  },
  text: {
    textAlign: 'center',
  },
});
