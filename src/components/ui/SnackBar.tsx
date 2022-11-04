import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Snackbar} from 'react-native-paper';

import {Colors} from '@muny-styles/global-styles';

interface Props {
  visibile: boolean;
  text: string;
  snackBarStyle?: Record<string, unknown>;
  duration?: number;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
}
const SnackBar: React.FC<Props> = ({
  visibile,
  text,
  snackBarStyle,
  duration = 7000,
  elevation = 2,
}) => {
  const [visible, setVisible] = React.useState(visibile);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        style={[styles.snackbar, {...snackBarStyle}]}
        duration={duration}
        elevation={elevation}
        visible={visible}
        onDismiss={onDismissSnackBar}>
        {text}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  snackbar: {
    backgroundColor: Colors.GREEN_LIGHT,
  },
});

export default SnackBar;
