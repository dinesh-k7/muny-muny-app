import {Text, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  text: string;
  style: Record<string, unknown>;
  textStyle: Record<string, unknown>;
  colors: string[];
  locations?: number[];
  end?: {x: number; y: number};
  onPress?: () => void;
  disabled?: boolean;
}

const GradientButton: React.FC<Props> = ({
  text,
  style,
  textStyle,
  colors,
  locations,
  end,
  disabled,
  onPress,
}) => {
  return (
    <Pressable>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <LinearGradient colors={colors} style={style} locations={locations} end={end}>
          <Text style={[textStyle, {...styles.buttonText}]}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: 'transparent',
  },
});

export default GradientButton;
