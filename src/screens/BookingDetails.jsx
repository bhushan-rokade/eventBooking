import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font, routes} from '../utils/constants';
import Footer from '../components/BookingDetails/Footer';
import {FlatList} from 'react-native-gesture-handler';
import CarouselItem from '../components/BookingDetails/Carouseltem';
import {useNavigation} from '@react-navigation/native';
import StarIcon from '../icons/StartIcon';
import LocationIcon from '../icons/LocationIcon';

export default function BookingDetails({route}) {
  const item = route.params;
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0.2)"
          barStyle="light-content"
        />
        <FlatList
          data={[item]}
          renderItem={({item, index}) => (
            <CarouselItem
              item={item}
              length={item.length || 1}
              navigation={navigation}
              index={index}
            />
          )}
          horizontal
          pagingEnabled
          style={{flex: 1}}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.headingTextView}>
          <Text style={styles.titleText}>{item.eventName}</Text>
          <View style={styles.innerTextView}>
            <Text style={styles.innerText}>₹.{item.price}</Text>
            <Text style={styles.innerText}>• {item.distance} away</Text>
            <Text style={styles.innerText}>• {item.date}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.innerText}>• {item.rating} </Text>
              <StarIcon size={scale(12)} color={colors.linkblue} />
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.descriptionView}>
          <Text style={styles.heading}>About The Event</Text>
          <Text style={styles.descriptionText}>{item.desc}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.locationView}>
          <Text style={styles.heading}>Location</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <LocationIcon size={scale(20)} />
            <Text style={styles.innerText}> {item.location}</Text>
          </View>
        </View>
        <View style={styles.divider} />
      </ScrollView>
      <Footer navigation={navigation} price={'2000'} data={item} />
    </>
  );
}

const styles = StyleSheet.create({
  locationView: {
    marginHorizontal: moderateScale(10),
  },
  heading: {
    color: colors.grey,
    marginBottom: moderateVerticalScale(10),
    fontFamily: font.bold,
    fontSize: scale(15),
  },
  descriptionText: {
    color: colors.grey,
    fontFamily: font.bold,
    textAlign: 'left',
    fontSize: scale(12),
  },
  descriptionView: {
    paddingHorizontal: moderateScale(10),
  },
  divider: {
    height: 0,
    marginHorizontal: moderateScale(10),
    marginTop: moderateVerticalScale(25),
    marginBottom: moderateVerticalScale(10),
    borderColor: colors.lightgrey,
    borderWidth: 0.2,
  },
  innerText: {
    fontSize: scale(12),
    color: colors.grey,
    fontFamily: font.semiBold,
  },
  innerTextView: {
    marginTop: moderateVerticalScale(5),
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  titleText: {
    fontFamily: font.extraBold,
    color: colors.grey,
    fontSize: scale(25),
  },
  headingTextView: {
    marginTop: moderateVerticalScale(15),
    marginHorizontal: moderateScale(10),
  },
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: colors.screenbackground,
  },
});
