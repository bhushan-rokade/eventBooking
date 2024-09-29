import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, font} from '../../utils/constants';
import {TextInput} from 'react-native-gesture-handler';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

export default function QuantityInput({label, placeholder}) {
  const [isFucosed, setIsFucused] = useState(false);
  const [value1, setValue] = useState(1);
  return (
    <View style={styles.inputView}>
      <Text style={isFucosed ? styles.inputLabelActive : styles.inputLabel}>
        {label}
      </Text>
      <View style={isFucosed ? styles.textInputActive : styles.textInput}>
        <TouchableOpacity
          style={styles.qtyBtnLeft}
          onPress={() => setValue(value1 - 1)}
          disabled={value1 == 1}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <TextInput
          placeholderTextColor={colors.black}
          style={styles.input}
          placeholder={placeholder}
          onFocus={() => setIsFucused(true)}
          onBlur={() => setIsFucused(false)}
          inputMode="numeric"
          editable={false}
          value={String(value1)}
        />
        <TouchableOpacity
          style={styles.qtyBtnRight}
          onPress={() => setValue(value1 + 1)}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  qtyText: {
    color: colors.grey,
    fontSize: scale(20),
    fontFamily: font.bold,
  },
  qtyBtnRight: {
    width: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: moderateVerticalScale(45),
    borderTopRightRadius: scale(17),
    borderBottomRightRadius: scale(20),
  },
  qtyBtnLeft: {
    width: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: moderateVerticalScale(45),
    borderTopLeftRadius: scale(17),
    borderBottomLeftRadius: scale(20),
  },
  input: {
    paddingHorizontal: moderateScale(20),
    color: colors.grey,
    fontFamily: font.bold,
    textAlign: 'center',
  },
  textInputActive: {
    backgroundColor: colors.lightgrey,
    borderRadius: scale(20),
    borderWidth: 2,
    borderColor: colors.linkblue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: colors.lightgrey,
    borderRadius: scale(20),
    borderWidth: 2,
    borderColor: colors.lightgrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
