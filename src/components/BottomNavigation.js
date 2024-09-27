import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import {colors, font} from '../utils/constants';
import HomeIcon from '../icons/HomeIcon';
import TicketIcon from '../icons/TicketIcon';
import UserRoundedIcon from '../icons/ProfileIcon';

const BottomNavigation = ({route}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.navbarItem]}>
        <HomeIcon
          size={scale(21)}
          color={route == 'Home' ? colors.linkblue : colors.grey}
        />
        <Text
          style={route == 'Home' ? styles.navbarTextActive : styles.navbarText}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <TicketIcon size={scale(21)} color={colors.grey} />
        <Text style={styles.navbarText}>Bookings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <UserRoundedIcon size={scale(21)} color={colors.grey} />
        <Text style={styles.navbarText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarTextActive: {
    fontFamily: font.extraBold,
    fontSize: scale(12),
    color: colors.linkblue,
  },
  navbarText: {
    fontFamily: font.bold,
    fontSize: scale(12),
    color: colors.grey,
  },
  container: {
    height: moderateVerticalScale(60),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.screenbackground,
    opacity: 10,
  },
});

export default BottomNavigation;
