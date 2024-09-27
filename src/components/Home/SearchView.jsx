import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font} from '../../utils/constants';
import SearchIcon from '../../icons/SearchIcon';

const SearchView = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
      />
      <TouchableOpacity>
        <SearchIcon size={scale(23)} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: scale(13),
    color: colors.black,
    width: moderateScale(220),
    fontFamily: font.semiBold,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.lightgrey,
    marginHorizontal: moderateScale(40),
    marginTop: moderateVerticalScale(10),
    height: moderateVerticalScale(40),
    borderRadius: scale(10),
  },
});

export default SearchView;
