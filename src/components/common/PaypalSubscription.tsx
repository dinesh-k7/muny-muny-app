import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PAYPAL_SUBSCRIPTION} from '../../constants/content';

import {useGetAccessTokenMutation, useCreateSubscriptionMutation} from '../../redux/api/paypalApi';
import {CreateSubscriptionResponse} from '../../redux/api/types';

interface Props {
  planId: string;
}
const PaypalSubscription: React.FC<Props> = ({planId}) => {
  const [approvalUrl, setApprovalUrl] = useState('');
  const [getAccessToken] = useGetAccessTokenMutation();
  const [createSubscription, {isSuccess, data}] = useCreateSubscriptionMutation();
  const navigation = useNavigation();

  useEffect(() => {
    if (isSuccess) {
      const {
        links: [{href}],
      } = data as CreateSubscriptionResponse;
      navigation.navigate('Paypal' as never, {approvalUrl} as never);
      setApprovalUrl(href);
    }
  }, [isSuccess, data, navigation, approvalUrl]);

  return (
    <View style={styles.subscriptionContainer}>
      <TouchableOpacity
        onPress={() => {
          getAccessToken(null).then((accessTokenData: any) => {
            const {access_token} = accessTokenData.data;
            if (access_token) {
              const payload = {
                plan_id: planId,
                application_context: PAYPAL_SUBSCRIPTION,
                access_token,
              };
              createSubscription(payload);
            }
          });
        }}>
        <Image source={require('@muny-assets/images/paypal.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subscriptionContainer: {
    marginTop: 16,
  },
  image: {
    resizeMode: 'center',
    width: '100%',
    height: 56,
  },
});

export default PaypalSubscription;
