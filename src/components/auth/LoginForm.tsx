import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';

import {Colors, CommonStyles} from '@muny-styles/global-styles';
import {TextField, GradientButton, AuthHeader, TextContent} from '@muny-components/native';
import {loginForm} from '../../utils/form-validation-rule';

type FormData = {
  email: string;
  password: string;
};

interface Props {
  onSubmit: (formData: FormData) => void;
}
export const LoginForm: React.FC<Props> = ({onSubmit}) => {
  const navigation = useNavigation();

  const {
    control,
    formState: {errors},
    formState,
    handleSubmit,
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const onPressHandler = () => navigation.navigate('Signup' as never);

  const onSubmitHandler = (loginData: FormData) => {
    onSubmit(loginData);
  };

  const mailIcon = <TextInput.Icon icon="email" />;
  const passwordIcon = <TextInput.Icon icon="form-textbox-password" />;

  return (
    <View style={styles.loginFormContainer}>
      <AuthHeader isLogin={true} />
      <View style={styles.textFieldContainer}>
        {/* Email field*/}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{...loginForm.email}}
          render={({field: {onChange, value, onBlur}}: any) => (
            <>
              <TextField
                value={value}
                mode={'flat'}
                icon={mailIcon}
                placeholder="Email Id"
                keyboardType={'email-address'}
                onBlur={onBlur}
                onChangeText={(v: any) => {
                  return onChange(v);
                }}
                hasError={errors.email && true}
                errorMessage={errors.email?.message}
              />
            </>
          )}
        />

        {/* Password field */}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{...loginForm.password}}
          render={({field: {onChange, onBlur, value}}: any) => (
            <>
              <TextField
                value={value}
                mode={'flat'}
                icon={passwordIcon}
                placeholder="Password"
                isPassword={true}
                keyboardType={'default'}
                onBlur={onBlur}
                onChangeText={(v: any) => onChange(v)}
                hasError={errors.password && true}
                errorMessage={errors.password?.message}
              />
            </>
          )}
        />

        <Text style={CommonStyles.linkText as never}>Forgot Password ?</Text>

        <View style={styles.buttonContainer}>
          <GradientButton
            colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
            text={'Login'}
            style={CommonStyles.buttonGradient}
            textStyle={CommonStyles.buttonGradientText}
            onPress={handleSubmit(onSubmitHandler)}
            disabled={!formState.isValid}
          />
        </View>

        <TextContent isLogin={true} style={CommonStyles.linkText} onPress={onPressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    flex: 1,
    paddingTop: 48,
    justifyContent: 'center',
  },
  textFieldContainer: {
    backgroundColor: Colors.WHITE,
    paddingTop: 24,
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  buttonContainer: {
    marginTop: 64,
    justifyContent: 'flex-start',
  },
});
