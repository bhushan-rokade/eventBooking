import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, font} from '../../utils/constants';
import {TextInput} from 'react-native-gesture-handler';
import {moderateScale, scale} from 'react-native-size-matters';

export default function Input({label, placeholder, inputmode}) {
  const [isFucosed, setIsFucused] = useState(false);
  return (
    <View style={styles.inputView}>
      <Text style={isFucosed ? styles.inputLabelActive : styles.inputLabel}>
        {label}
      </Text>
      <View style={isFucosed ? styles.textInputActive : styles.textInput}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.black}
          style={styles.input}
          onFocus={() => setIsFucused(true)}
          onBlur={() => setIsFucused(false)}
          inputMode={inputmode}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: moderateScale(20),
    color: colors.grey,
  },
  textInputActive: {
    backgroundColor: colors.lightgrey,
    borderRadius: scale(20),
    borderWidth: 2,
    borderColor: colors.linkblue,
  },
  textInput: {
    backgroundColor: colors.lightgrey,
    borderRadius: scale(20),
    borderWidth: 2,
    borderColor: colors.lightgrey,
  },
  inputLabelActive: {
    color: colors.linkblue,
    marginLeft: moderateScale(13),
    fontFamily: font.semiBold,
    fontSize: scale(12),
  },
  inputLabel: {
    color: colors.black,
    marginLeft: moderateScale(13),
    fontFamily: font.semiBold,
    fontSize: scale(12),
  },
  inputView: {
    justifyContent: 'center',
    gap: moderateScale(5),
  },
});
