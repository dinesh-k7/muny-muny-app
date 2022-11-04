import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {LoginForm, SnackBar} from '@muny-components/native';
import {Colors, CommonStyles} from '@muny-styles/global-styles';
import {useLoginMutation} from '../../redux/api/authApi';
import {MESSAGES} from '../../constants/content';

export const LoginScreen: React.FC<any> = () => {
  const [login, {isSuccess, isError}] = useLoginMutation();

  const onSubmitHandler = (loginData: {email: string; password: string}) => {
    login(loginData);
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.loginContainer}>
        <LoginForm onSubmit={onSubmitHandler} />
      </View>
      <View>{isSuccess ? <SnackBar visibile={true} text={MESSAGES.LOGIN_SUCCESS} /> : null}</View>
      {isError ? (
        <SnackBar
          visibile={true}
          text={MESSAGES.LOGIN_FAILURE}
          snackBarStyle={CommonStyles.snackBarError}
        />
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    padding: 16,
  },
});
