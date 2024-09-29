import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import LeftArrowIcon from '../../icons/LeftArrowIcon';
import ImageIcon from '../../icons/ImageIcon';
import {colors, font} from '../../utils/constants';

const CarouselItem = ({item, length, navigation, index}) => {
  const width1 = useWindowDimensions().width;
  return (
    <ImageBackground
      source={{uri: item.imagelink}}
      style={[styles.container, {width: width1}]}>
      <TouchableOpacity
        style={styles.leftArrow}
        onPress={() => navigation.goBack()}>
        <LeftArrowIcon size={scale(20)} color="white" />
      </TouchableOpacity>
      <View style={styles.imageCounter}>
        <ImageIcon color={colors.screenbackground} size={scale(15)} />
        <Text style={styles.counterText}>
          {index + 1}/{length}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontFamily: font.bold,
    color: colors.screenbackground,
    marginLeft: moderateScale(5),
    fontSize: scale(13),
  },
  imageCounter: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    opacity: 0.9,
    paddingHorizontal: moderateScale(20),
    height: moderateVerticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
    marginBottom: moderateVerticalScale(20),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  leftArrow: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: moderateVerticalScale(45),
    height: moderateVerticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(30),
  },
  container: {
    flex: 1,
    height: moderateVerticalScale(350),
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateVerticalScale(40),
    justifyContent: 'space-between',
  },
});

export default CarouselItem;
