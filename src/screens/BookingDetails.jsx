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

const data = [
  {
    id: 1,
    imagelink:
      'https://img.freepik.com/free-photo/rear-view-large-group-music-fans-front-stage-during-music-concert-by-night-copy-space_637285-623.jpg',
    categoryText: 'Music',
    eventName: 'Music Concert',
    price: 2000,
    eventCount: 20,
    rating: 4.5,
    distance: '100 kms',
  },
  {
    id: 2,
    imagelink:
      'https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-rendered-3d-image-of-a-vibrant-soccer-stadium-with-a-football-image_13551920.png',
    categoryText: 'Sport',
    eventName: 'Football Match',
    price: 1500,
    eventCount: 10,
    rating: 4.7,
    distance: '50 kms',
  },
  {
    id: 3,
    imagelink:
      'https://cdn.pixabay.com/photo/2024/03/03/17/17/cinema-8610863_1280.png',
    categoryText: 'Movie',
    eventName: 'Movie Screening',
    price: 500,
    eventCount: 5,
    rating: 4.1,
    distance: '16 kms',
  },
];
export default function BookingDetails() {
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
          data={data}
          renderItem={({item}) => (
            <CarouselItem
              item={item}
              length={data.length}
              navigation={navigation}
            />
          )}
          horizontal
          pagingEnabled
          style={{flex: 1}}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.headingTextView}>
          <Text style={styles.titleText}>{data[0].eventName}</Text>
          <View style={styles.innerTextView}>
            <Text style={styles.innerText}>₹.2000</Text>
            <Text style={styles.innerText}>• 3 Km away</Text>
            <Text style={styles.innerText}>• 11/9/2024</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.innerText}>• 4.8 </Text>
              <StarIcon size={scale(12)} color={colors.linkblue} />
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.descriptionView}>
          <Text style={styles.heading}>About The Event</Text>
          <Text style={styles.descriptionText}>
            Throughout the concert, Coldplay seamlessly navigated between
            anthems and more intimate moments, showcasing their versatility and
            artistry. Chris Martin's interactions with the crowd, filled with
            genuine warmth and humility, made the colossal arena feel like an
            intimate gathering of friends.
          </Text>
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
            <Text style={styles.innerText}> Gurgaon,Mumbai</Text>
          </View>
        </View>
        <View style={styles.divider} />
      </ScrollView>
      <Footer navigation={navigation} price={'2000'} />
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
