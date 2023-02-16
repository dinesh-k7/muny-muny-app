import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {Colors} from '@muny-styles/global-styles';
import {BillingHeader, PlansContainer} from '@muny-components/native';

export const BillingScreen = () => {
  const [isMonthly, setMonthly] = useState(true);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.billingContainer}>
        <BillingHeader onPressHandler={status => setMonthly(status)} />
        <PlansContainer isMonthly={isMonthly} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  billingContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    padding: 16,
    marginTop: 24,
  },
});
