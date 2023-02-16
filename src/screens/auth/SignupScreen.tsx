import {Colors, CommonStyles} from '@muny-styles/global-styles';
import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SignupForm, SnackBar} from '@muny-components/native';
import {useSignupMutation} from '../../redux/api/authApi';
import {MESSAGES} from '../../constants/content';
import {SignupData} from '../../models/auth.model';
import {SignupErrorHandler} from '../../utils/error-handling';

export const SignupScreen = () => {
  const [signup, {isSuccess, isError, error}] = useSignupMutation();
  const navigation = useNavigation();

  const onSubmitHandler = (data: any) => {
    if (data && Object.keys(data).length) {
      const {
        firstName,
        lastName,
        email,
        password,
        addressLine1,
        addressLine2,
        city,
        state,
        phone,
        zipCode,
      } = data;

      const signupData: SignupData = {
        email,
        firstName,
        lastName,
        password,
        phone,
        address: {
          lineOne: addressLine1,
          lineTwo: addressLine2,
          city,
          state,
          zipCode,
        },
      };

      signup(signupData);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Billing' as never);
    }
  }, [isSuccess, navigation]);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.signupContainer}>
        <SignupForm onSubmit={onSubmitHandler} />
      </View>

      {isError ? (
        <SnackBar
          visibile={true}
          text={SignupErrorHandler(error) ? SignupErrorHandler(error) : MESSAGES.SIGNUP_FAILURE}
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
