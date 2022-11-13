import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ToggleButton} from '@muny-components/native';
import {headingText} from '@muny-styles/common-styles';
import {Colors} from '@muny-styles/global-styles';

interface Props {
  onPressHandler: (status: boolean) => void;
}
const BillingHeader: React.FC<Props> = ({onPressHandler}) => {
  return (
    <View style={styles.container}>
      <Text style={[headingText, styles.title]}>PRICING</Text>
      <Text>Pick the plan that fits your budgeting needs</Text>
      <View style={styles.toggleContainer}>
        <Text style={styles.textOne}>Monthly</Text>
        <ToggleButton color={Colors.GREEN_LIGHT} onPress={status => onPressHandler(status)} />
        <Text style={styles.textTwo}>Yearly</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 140,
  },
  title: {},
  textOne: {
    paddingRight: 10,
    paddingTop: 4,
  },
  textTwo: {
    paddingLeft: 8,
    paddingTop: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
  },
});
export default BillingHeader;
