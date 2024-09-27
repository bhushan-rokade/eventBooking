import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font} from '../../utils/constants';
import StarIcon from '../../icons/StartIcon';

const SingleList = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{uri: item.imagelink}} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.subject}>{item.eventName}</Text>
        <Text style={styles.price}>₹.{item.price}</Text>
        <Text style={styles.category}>{item.categoryText}</Text>
        <View style={styles.distRating}>
          <Text style={styles.distance}>{item.distance} away</Text>
          <Text style={styles.rating}>• {item.rating}</Text>
          <StarIcon size={scale(10)} color={colors.linkblue} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rating: {
    fontFamily: font.semiBold,
    fontSize: scale(10),
    marginLeft: moderateScale(15),
    color: colors.linkblue,
  },
  distRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    fontFamily: font.semiBold,
    fontSize: scale(10),
    color: colors.grey,
  },
  category: {
    fontFamily: font.bold,
    color: colors.grey,
    fontSize: scale(12),
  },
  price: {
    fontFamily: font.bold,
    color: colors.grey,
    fontSize: scale(13),
  },
  subject: {
    fontFamily: font.bold,
    color: colors.black,
    fontSize: scale(16),
  },
  textView: {
    width: moderateScale(200),
    marginHorizontal: moderateScale(10),
    marginVertical: moderateVerticalScale(20),
  },
  image: {
    height: moderateVerticalScale(160),
    width: moderateScale(170),
    borderRadius: scale(15),
  },
  container: {
    marginTop: moderateVerticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(18),
    width: moderateScale(300),
  },
});

export default SingleList;
