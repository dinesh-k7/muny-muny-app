import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {PLANS} from '../../constants/plans';
import PlanItem from './PlanItem';

const PlansContainer = () => {
  return (
    <View style={styles.container}>
      {PLANS &&
        PLANS.length &&
        PLANS.map(plan => {
          return <PlanItem key={plan.id} plan={plan} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#e4f3f3',
  },
});
export default PlansContainer;
