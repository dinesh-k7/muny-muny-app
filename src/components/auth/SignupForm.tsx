import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';

import {
  GradientButton,
  TextField,
  AuthHeader,
  TextContent,
  SelectBox,
} from '@muny-components/native';
import {Colors, CommonStyles} from '@muny-styles/global-styles';
import {signupForm} from '../../utils/form-validation-rule';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
};

interface Props {
  onSubmit: (data: FormData) => void;
}

const INITIATE_STATE = {
  firstName: 'DINESH',
  lastName: 'kumar',
  email: 'dineshiie@gmail.com',
  phone: '8672345643',
  password: 'Repsol@99k',
  confirmPassword: 'Repsol@99k',
  addressLine1: '7011 Halifax',
  addressLine2: '',
  city: 'Halifax',
  state: 'Nova Scotia',
  country: 'Canada',
  zipCode: '90001',
};
export const SignupForm: React.FC<Props> = ({onSubmit}) => {
  const navigation = useNavigation();
  const {
    control,
    formState: {errors},
    formState,
    handleSubmit,
    getValues,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: INITIATE_STATE,
  });

  const onPressHandler = () => navigation.navigate('Login' as never);

  const mailIcon = <TextInput.Icon icon="email" />;
  const passwordIcon = <TextInput.Icon icon="lock" />;
  const accountIcon = <TextInput.Icon icon="account" />;
  const phoneIcon = <TextInput.Icon icon="phone" />;
  const addressIcon = <TextInput.Icon icon="map-marker" />;
  const cityIcon = <TextInput.Icon icon="city" />;
  const zipCodeIcon = <TextInput.Icon icon="post-outline" />;
  return (
    <View style={styles.signupFormContainer}>
      <AuthHeader isLogin={false} />
      <ScrollView>
        <View style={styles.textFieldContainer}>
          {/* First name field */}
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{...signupForm.firstName}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={accountIcon}
                  placeholder="First Name"
                  keyboardType={'default'}
                  onBlur={onBlur}
                  maxLength={50}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.firstName && true}
                  errorMessage={errors.firstName?.message}
                />
              </>
            )}
          />

          {/* Last name field */}
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{...signupForm.lastName}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={accountIcon}
                  placeholder="Last Name"
                  keyboardType={'default'}
                  onBlur={onBlur}
                  maxLength={50}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.lastName && true}
                  errorMessage={errors.lastName?.message}
                />
              </>
            )}
          />

          {/* Email field */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{...signupForm.email}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={mailIcon}
                  placeholder="Email"
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

          {/* Phone field */}
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={phoneIcon}
                  placeholder="(201) 555-0123"
                  keyboardType={'phone-pad'}
                  onBlur={onBlur}
                  maxLength={12}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                />
              </>
            )}
          />

          {/* Password field */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{...signupForm.password}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={passwordIcon}
                  placeholder="Password"
                  keyboardType={'default'}
                  isPassword={true}
                  onBlur={onBlur}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.password && true}
                  errorMessage={errors.password?.message}
                />
              </>
            )}
          />

          {/* Confirm Password field */}
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              ...signupForm.confirmPassword,
              validate: value => value === getValues('password') || 'Passwords must match',
            }}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={passwordIcon}
                  placeholder="Confirm Password"
                  keyboardType={'default'}
                  isPassword={true}
                  onBlur={onBlur}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.confirmPassword && true}
                  errorMessage={errors.confirmPassword?.message}
                />
              </>
            )}
          />

          {/* Address line one field */}
          <Controller
            name="addressLine1"
            control={control}
            defaultValue=""
            rules={{...signupForm.addressLine1}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={addressIcon}
                  placeholder="Enter Street Address"
                  keyboardType={'default'}
                  onBlur={onBlur}
                  maxLength={75}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.addressLine1 && true}
                  errorMessage={errors.addressLine1?.message}
                />
              </>
            )}
          />

          {/* Address line two field */}
          <Controller
            name="addressLine2"
            control={control}
            defaultValue=""
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={addressIcon}
                  placeholder="Apt, Suite, Building, floor, etc."
                  keyboardType={'default'}
                  onBlur={onBlur}
                  maxLength={75}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                />
              </>
            )}
          />

          {/* City field */}
          <Controller
            name="city"
            control={control}
            defaultValue=""
            rules={{...signupForm.city}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={cityIcon}
                  placeholder="Enter City"
                  keyboardType={'default'}
                  onBlur={onBlur}
                  maxLength={75}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.city && true}
                  errorMessage={errors.city?.message}
                />
              </>
            )}
          />

          {/* State field */}
          <Controller
            name="state"
            control={control}
            defaultValue=""
            rules={{...signupForm.state}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={cityIcon}
                  placeholder="Enter State"
                  keyboardType={'default'}
                  onBlur={onBlur}
                  maxLength={75}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.state && true}
                  errorMessage={errors.state?.message}
                />
              </>
            )}
          />

          {/* Country field */}
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <SelectBox
                  value={value}
                  placeHolderText={'Select Country'}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              </>
            )}
          />

          {/* Zip Code field */}
          <Controller
            name="zipCode"
            control={control}
            defaultValue=""
            rules={{...signupForm.zipCode}}
            render={({field: {onChange, value, onBlur}}: any) => (
              <>
                <TextField
                  value={value}
                  mode={'flat'}
                  icon={zipCodeIcon}
                  placeholder="Enter zip code"
                  keyboardType={'default'}
                  onBlur={onBlur}
                  maxLength={10}
                  onChangeText={(v: any) => {
                    return onChange(v);
                  }}
                  hasError={errors.zipCode && true}
                  errorMessage={errors.zipCode?.message}
                />
              </>
            )}
          />

          <TouchableOpacity style={styles.buttonContainer}>
            <GradientButton
              colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
              text={'Select Plan'}
              style={CommonStyles.buttonGradient}
              textStyle={CommonStyles.buttonGradientText}
              disabled={!formState.isValid}
              onPress={handleSubmit(onSubmit)}
            />
          </TouchableOpacity>

          <TextContent
            isLogin={false}
            style={CommonStyles.linkText as never}
            onPress={onPressHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  signupFormContainer: {
    flex: 1,
  },
  textFieldContainer: {
    flex: 2,
    marginTop: 24,
  },

  buttonContainer: {
    marginTop: 64,
    justifyContent: 'flex-start',
  },
});
