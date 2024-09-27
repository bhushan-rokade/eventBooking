import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font} from '../../utils/constants';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.exploreListView}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.imagelink,
        }}
      />
      <Text style={styles.categoryText}>{item.categoryText}</Text>
      <Text style={styles.eventCount}>{item.eventCount} Events</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventCount: {
    color: colors.black,
    fontFamily: font.normal,
    fontSize: scale(12),
    marginLeft: moderateScale(3),
  },
  categoryText: {
    color: colors.black,
    fontFamily: font.semiBold,
    fontSize: scale(17),
    marginLeft: moderateScale(3),
  },
  imageStyle: {
    height: moderateVerticalScale(200),
    width: moderateScale(150),
    borderRadius: scale(10),
    resizeMode: 'cover',
  },
  exploreListView: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    height: moderateVerticalScale(260),
    width: moderateScale(150),
  },
});

export default ListItem;
