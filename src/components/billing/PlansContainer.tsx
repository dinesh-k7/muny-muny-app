import React from 'react';
import {View, StyleSheet} from 'react-native';

import {PLANS} from '../../constants/plans';
import PlanItem from './PlanItem';

interface Props {
  isMonthly: boolean;
}
const PlansContainer: React.FC<Props> = ({isMonthly}) => {
  return (
    <View style={styles.container}>
      {PLANS &&
        PLANS.length &&
        PLANS.map(plan => {
          return <PlanItem key={plan.id} plan={plan} isMonthly={isMonthly} />;
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
