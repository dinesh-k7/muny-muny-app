import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Switch} from 'react-native-paper';

interface Props {
  color?: string;
  style?: StyleProp<ViewStyle>;
}
const ToggleButton: React.FC<Props> = ({color, style}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
