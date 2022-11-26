import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {WebView} from 'react-native-webview';

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
        <View>
          <Text>
            <WebView
              source={{
                uri: 'https://www.paypal.com/sdk/js?client-id=Aa2YyWsIRwixqn9O52CErPM0wecIfjHU-H8I1FgtvsgGHuDEjq90vun8di9N-ZCy1WaHpT58wg6pyit1&vault=true&intent=subscription',
              }}
            />
          </Text>
        </View>
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
