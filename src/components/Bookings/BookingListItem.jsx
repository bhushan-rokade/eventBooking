import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font} from '../../utils/constants';
import RightArrowIcon from '../../icons/RightArrowIcon';

const BookingListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{uri: item.imagelink}} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.subject}>{item.eventName}</Text>
        <View style={styles.timeDetails}>
          <Text style={styles.date}>
            {item.date} - {item.time}
          </Text>
        </View>
      </View>
      <View style={styles.iconView}>
        <RightArrowIcon color="black" size={scale(17)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontFamily: font.semiBold,
    fontSize: scale(10),
    marginLeft: moderateScale(10),
    color: colors.grey,
  },
  date: {
    fontFamily: font.semiBold,
    fontSize: scale(10),
    color: colors.grey,
  },
  subject: {
    fontFamily: font.bold,
    color: colors.black,
    fontSize: scale(16),
  },
  textView: {
    width: moderateScale(160),
    marginHorizontal: moderateScale(10),
    marginVertical: moderateVerticalScale(20),
  },
  image: {
    height: moderateVerticalScale(120),
    width: moderateScale(150),
    borderRadius: scale(15),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BookingListItem;
