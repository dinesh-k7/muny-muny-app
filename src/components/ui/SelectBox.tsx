import React, {ReactNode, useState} from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Colors} from '@muny-styles/global-styles';
import {countries} from '../../constants/countries';

interface Props {
  value: string;
  placeHolderText: string;
  style?: StyleProp<ViewStyle>;
  icon?: ReactNode | undefined;
  onBlur: () => void;
  onChange: () => void;
}
const SelectBox: React.FC<Props> = ({style, placeHolderText}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={style ? [styles.selectContainer, style] : styles.selectContainer}>
      <SelectDropdown
        buttonStyle={focus ? [styles.buttonStyle] : styles.buttonStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        dropdownStyle={styles.dropdownStyle}
        data={countries}
        defaultButtonText={placeHolderText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        defaultValue={{
          name: 'United States',
          code: 'US',
        }}
        searchInputStyle={styles.dropdown1searchInputStyleStyle}
        searchPlaceHolder={'Search here'}
        searchPlaceHolderColor={'darkgrey'}
        renderSearchInputLeftIcon={() => {
          return <FontAwesome name={'search'} color={'#444'} size={18} />;
        }}
        // renderDropdownIcon={() => <TextInput.Icon icon="flag" />}
        // dropdownIconPosition={'left'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={selectedItem => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem.name;
        }}
        rowTextForSelection={item => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item.name;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    marginHorizontal: 8,
    marginVertical: 16,
    backgroundColor: Colors.WHITE,
    flex: 1,
    width: '100%',
    borderBottomColor: Colors.GRAY_LIGHT,
    borderBottomWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    width: '100%',
  },
  dropdownStyle: {
    flex: 1,
  },
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: '#49454f',
  },
  buttonGreen: {
    borderColor: Colors.GREEN,
    borderBottomWidth: 3,
  },
});

export default SelectBox;
