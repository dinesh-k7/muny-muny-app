import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {Colors} from './styles/global-styles';
import {RootNavigator} from './navigation/RootNavigator';
import {store} from './redux/store';
import {OverlaySpinner} from '@muny-components/native';

const App = () => {
  //Hide Splash screen on app load.
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <RootNavigator />
        <StatusBar backgroundColor={Colors.GREEN} animated={true} barStyle={'default'} />
        <OverlaySpinner />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default App;
