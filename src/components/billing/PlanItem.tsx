/* eslint-disable indent */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {List} from 'react-native-paper';
import {borderRadius, boxShadow} from '@muny-styles/mixins';
import {GradientButton, PaypalSubscription} from '@muny-components/native';
import {Colors, CommonStyles} from '@muny-styles/global-styles';

interface Props {
  plan: any;
  isMonthly: boolean;
}
const PlanItem: React.FC<Props> = ({plan, isMonthly}) => {
  const [showSubscribeBtn, setSubscribeStatus] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('');

  // Render Image component for plan feature icon based on it's type
  const getImage = (imageName: string) => {
    switch (imageName) {
      case 'white-circle.png':
        return (
          <Image
            source={require('@muny-assets/images/white-circle.png')}
            style={styles.featureIcon}
          />
        );
      case 'white-disable-icon.png':
        return (
          <Image
            source={require('@muny-assets/images/white-disable-icon.png')}
            style={styles.featureIcon}
          />
        );
      case 'blue-circle.png':
        return (
          <Image
            source={require('@muny-assets/images/blue-circle.png')}
            style={styles.featureIcon}
          />
        );

      case 'disable-icon.png':
        return (
          <Image
            source={require('@muny-assets/images/disable-icon.png')}
            style={styles.featureIcon}
          />
        );
    }
  };
  return (
    <View style={[styles.itemContainer, {backgroundColor: plan.backgroundColorCode}]}>
      <View style={[styles.header, {borderBottomColor: plan.borderBottomColor}]}>
        <View style={[styles.planName]}>
          <Text style={{color: plan.fontColor, fontWeight: 'bold', fontSize: 20}}>
            {plan.title}
          </Text>
          <Text style={{color: plan.fontColor}}>{plan.label}</Text>
        </View>
        <View style={[styles.planPrice, {backgroundColor: plan.priceBgColor}]}>
          <Text style={{color: plan.fontColor, fontWeight: 'bold', fontSize: 20}}>
            ${isMonthly ? plan.price : plan.yearlyPrice}
          </Text>
          <Text style={{color: plan.fontColor}}>{isMonthly ? 'Monthly' : 'Yearly'} </Text>
        </View>
      </View>
      <View style={styles.features}>
        {plan.features &&
          plan.features.length &&
          plan.features.map((feature: any) => {
            return (
              <List.Item
                title=""
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 0,
                  marginTop: 0,
                  marginLeft: 16,
                }}
                description={feature.description}
                key={feature.id}
                descriptionStyle={{color: plan.id !== 1 ? '#FFFFFF' : '#212529'}}
                left={() =>
                  feature.isDisabled ? getImage(plan.disableIcon) : getImage(plan.enableIcon)
                }
              />
            );
          })}
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton
          colors={[Colors.BUTTON_GRADIENT_ONE, Colors.BUTTON_GRADIENT_TWO]}
          text={'Start Free Trial'}
          style={CommonStyles.buttonGradient}
          textStyle={CommonStyles.buttonGradientText}
          onPress={() => {
            setSelectedPlanId(isMonthly ? plan.monthlySubscriptionId : plan.yearlySubscriptionId);
            setSubscribeStatus(true);
          }}
        />
        {showSubscribeBtn &&
        selectedPlanId === (isMonthly ? plan.monthlySubscriptionId : plan.yearlySubscriptionId) ? (
          <PaypalSubscription planId={selectedPlanId} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: 32,
    marginHorizontal: 24,
    ...boxShadow(),
    ...borderRadius(),
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  planName: {},
  planPrice: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    ...borderRadius(10),
  },
  features: {
    marginVertical: 16,
  },
  featureIcon: {
    marginTop: 28,
    width: 16,
    height: 16,
  },
  buttonContainer: {
    padding: 32,
  },
});

export default PlanItem;
