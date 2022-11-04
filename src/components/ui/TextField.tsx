import React, {ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

import {Colors} from '@muny-styles/global-styles';

enum KeyboardType {
  DEFAULT = 'default',
  EMAIL_ADDRESS = 'email-address',
}

type KeyboardOptions = 'default' | 'email-address' | 'phone-pad' | 'url' | 'number-pad';

interface Props {
  mode: 'flat' | 'outlined' | undefined;
  icon: ReactElement;
  keyboardType: KeyboardType | KeyboardOptions;
  value: any;
  onBlur: () => void;
  onChangeText: (val: any) => void;
  placeholder?: string;
  style?: Record<string, unknown>;
  isPassword?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  maxLength?: number;
}

const TextField: React.FC<Props> = ({
  mode,
  icon,
  keyboardType,
  placeholder,
  value,
  style,
  isPassword = false,
  hasError,
  errorMessage,
  onBlur,
  onChangeText,
  maxLength,
}) => {
  return (
    <View style={style ? [styles.inputContainer, {...style}] : styles.inputContainer}>
      <TextInput
        error={hasError}
        value={value}
        theme={{colors: {primary: Colors.GREEN}}}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        underlineColor="transparent"
        keyboardType={keyboardType}
        mode={mode}
        maxLength={maxLength ? maxLength : undefined}
        onBlur={() => {
          onBlur();
        }}
        onChangeText={(v: any) => onChangeText(v)}
        left={icon ? icon : null}
      />
      <HelperText type="error" visible={hasError}>
        {errorMessage}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 8,
    marginVertical: 16,
    backgroundColor: Colors.WHITE,
  },
  input: {
    flex: 1,
    borderBottomColor: Colors.GRAY_LIGHT,
    borderBottomWidth: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default TextField;
