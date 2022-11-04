import {Colors, CommonStyles} from '@muny-styles/global-styles';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {SignupForm, SnackBar} from '@muny-components/native';
import {useSignupMutation} from '../../redux/api/authApi';
import {MESSAGES} from '../../constants/content';

export const SignupScreen = () => {
  const [signup, {isSuccess, isError}] = useSignupMutation();

  const onSubmitHandler = (signupData: Record<string, unknown>) => {
    const formData = new FormData();
    formData.append('data', JSON.stringify(signupData));
    signup(formData);
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.signupContainer}>
        <SignupForm onSubmit={onSubmitHandler} />
      </View>

      {isSuccess ? <SnackBar visibile={true} text={MESSAGES.SIGNUP_SUCCESS} /> : null}

      {isError ? (
        <SnackBar
          visibile={true}
          text={MESSAGES.SIGNUP_FAILURE}
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
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    padding: 16,
  },
});
