import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {useSelector} from 'react-redux';

const OverlaySpinner: React.FC<any> = () => {
  const isPending = useSelector((state: any) => {
    if (state && state.auth) {
      return (
        Object.values(state.auth.mutations).some(
          (mutation: any) => mutation.status === 'pending',
        ) || Object.values(state.auth.queries).some((queries: any) => queries.status === 'pending')
      );
    }
    return false;
  });

  return (
    <>
      {isPending && (
        <View style={styles.loading}>
          <ActivityIndicator animating={isPending} color={MD2Colors.green400} size={80} />
        </View>
      )}
    </>
  );
};

export default OverlaySpinner;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF88',
    zIndex: 1,
  },
});
