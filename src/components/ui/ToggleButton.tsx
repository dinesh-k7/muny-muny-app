import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Switch} from 'react-native-paper';

interface Props {
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (status: boolean) => void;
}
const ToggleButton: React.FC<Props> = ({color, style, onPress}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if (onPress) {
      onPress(!isSwitchOn);
    }
  };

  return (
    <Switch
      style={style ? style : null}
      color={color ? color : ''}
      value={isSwitchOn}
      onValueChange={onToggleSwitch}
    />
  );
};

export default ToggleButton;
