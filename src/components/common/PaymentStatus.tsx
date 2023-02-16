/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

import {BillingRoutes, AuthRoutes} from '../../navigation/routes';
import {Colors, CommonStyles} from '@muny-styles/global-styles';
import {GradientButton} from '@muny-components/native';

const PaymentStatus: React.FC<any> = ({route}) => {
  const navigation = useNavigation();
  const {
    params: {isSuccess},
  } = route;
  const currentDate: Date = new Date();
  const futureDate: any = new Date(currentDate.setDate(currentDate.getDate() + 30))
    .toISOString()
    .slice(0, 10);

  return (
    <View style={styles.container}>
      {isSuccess ? (
        <Card style={styles.container}>
          <Card.Content style={styles.content}>
            <Title> Payment Success</Title>
            <Paragraph>
              {' '}
              Your subscription was processed successfully! Your 30 days trial starts today. You
              won't be charged for the subscription if you cancel before {futureDate} To gain access
              to your account, please confirm your email address from the link we sent to your email
              inbox.
            </Paragraph>
            <View style={styles.buttonContainer}>
              <GradientButton
                colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
                text={'Login'}
                style={CommonStyles.buttonGradient}
                textStyle={CommonStyles.buttonGradientText}
                onPress={() => {
                  navigation.navigate(
                    AuthRoutes.AUTH as never,
                    {screen: AuthRoutes.LOGIN} as never,
                  );
                }}
              />
            </View>
          </Card.Content>
        </Card>
      ) : (
        ''
      )}

      {!isSuccess ? (
        <Card style={styles.container}>
          <Card.Content style={styles.content}>
            <Title> Payment Failure</Title>
            <Paragraph>
              Your subscription was failed,
              <Text
                style={[CommonStyles.linkText as never, {marginLeft: 16}]}
                onPress={() =>
                  navigation.navigate(
                    BillingRoutes.BILLING as never,
                    {screen: BillingRoutes.PLANS} as never,
                  )
                }>
                Please try again
              </Text>
            </Paragraph>
          </Card.Content>
        </Card>
      ) : (
        ''
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 32,
    width: '75%',
  },
});

export default PaymentStatus;
