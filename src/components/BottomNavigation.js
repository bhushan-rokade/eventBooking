import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import {colors, font, routes} from '../utils/constants';
import HomeIcon from '../icons/HomeIcon';
import TicketIcon from '../icons/TicketIcon';
import UserRoundedIcon from '../icons/ProfileIcon';
import {useNavigation} from '@react-navigation/native';

const BottomNavigation = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.navbarItem]}
        onPress={() => navigation.navigate(routes.HOME)}>
        <HomeIcon
          size={scale(21)}
          color={route == routes.HOME ? colors.linkblue : colors.grey}
        />
        <Text
          style={
            route == routes.HOME ? styles.navbarTextActive : styles.navbarText
          }>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarItem}
        onPress={() => navigation.navigate(routes.BOOKINGS)}>
        <TicketIcon
          size={scale(21)}
          color={route == routes.BOOKINGS ? colors.linkblue : colors.grey}
        />
        <Text
          style={
            route == routes.BOOKINGS
              ? styles.navbarTextActive
              : styles.navbarText
          }>
          Bookings
        </Text>
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
