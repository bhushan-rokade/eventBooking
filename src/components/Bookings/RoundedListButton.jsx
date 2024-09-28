import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, font} from '../../utils/constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const RoundListButton = ({id, name, onpress, selectedId}) => {
  return (
    <TouchableOpacity
      style={id == selectedId ? styles.containerActive : styles.container}
      onPress={() => onpress(id)}>
      <Text style={id == selectedId ? styles.textActive : styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(100),
    height: moderateVerticalScale(30),
    backgroundColor: colors.lightgrey,
    borderRadius: scale(15),
  },
  containerActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(90),
    height: moderateVerticalScale(30),
    backgroundColor: colors.grey,
    borderRadius: scale(15),
  },
  text: {
    color: colors.grey,
    fontFamily: font.bold,
    fontSize: scale(12),
  },
  textActive: {
    color: colors.screenbackground,
    fontFamily: font.bold,
    fontSize: scale(12),
  },
});

export default RoundListButton;
