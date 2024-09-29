import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, font, routes} from '../../utils/constants';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import LightningIcon from '../../icons/LightningIcon';

const Footer = ({navigation, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>₹.{price} / entry</Text>
      <TouchableOpacity
        style={styles.bookBtn}
        onPress={() => navigation.navigate(routes.BOOKEVENT)}>
        <Text style={styles.btnText}>Book </Text>
        <LightningIcon color="white" size={scale(15)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: font.bold,
    color: colors.screenbackground,
    fontSize: scale(13),
    marginBottom: moderateVerticalScale(2),
  },
  priceText: {
    color: colors.grey,
    fontFamily: font.normal,
    fontSize: scale(15),
  },
  bookBtn: {
    backgroundColor: colors.blue,
    width: moderateScale(130),
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateVerticalScale(40),
    borderRadius: scale(20),
    flexDirection: 'row',
  },
  container: {
    height: moderateVerticalScale(60),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(40),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.screenbackground,
    opacity: 10,
  },
});

export default Footer;
