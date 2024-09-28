import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font, routes} from '../utils/constants';
import BottomNavigation from '../components/BottomNavigation';
import RoundListButton from '../components/Bookings/RoundedListButton';
import BookingListItem from '../components/Bookings/BookingListItem';

const data = [
  {
    id: 1,
    imagelink:
      'https://img.freepik.com/free-photo/rear-view-large-group-music-fans-front-stage-during-music-concert-by-night-copy-space_637285-623.jpg',
    eventName: 'Music Concert',
    date: '11/9/2024',
    time: '9:00 PM',
  },
  {
    id: 2,
    imagelink:
      'https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-rendered-3d-image-of-a-vibrant-soccer-stadium-with-a-football-image_13551920.png',
    eventName: 'Football Match',
    date: '17/9/2024',
    time: '11:00 PM',
  },
  {
    id: 3,
    imagelink:
      'https://cdn.pixabay.com/photo/2024/03/03/17/17/cinema-8610863_1280.png',
    eventName: 'Movie Screening',
    date: '17/9/2024',
    time: '1:00 PM',
  },
  {
    id: 4,
    imagelink:
      'https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-rendered-3d-image-of-a-vibrant-soccer-stadium-with-a-football-image_13551920.png',
    eventName: 'Football Match',
    date: '17/9/2024',
    time: '11:00 PM',
  },
  {
    id: 5,
    imagelink:
      'https://cdn.pixabay.com/photo/2024/03/03/17/17/cinema-8610863_1280.png',
    eventName: 'Movie Screening',
    date: '17/9/2024',
    time: '1:00 PM',
  },
];

const data2 = [
  {
    id: 1,
    name: 'Ongoing',
  },
  {
    id: 2,
    name: 'Upcoming',
  },
  {
    id: 3,
    name: 'Completed',
  },
];

const height = Dimensions.get('window').height;

export default function Bookings() {
  const [selectedButtonId, setSelectedButtonId] = useState(1);

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.headingView}>
          <Text style={styles.heading}>Your Bookings</Text>
        </View>
        <View style={styles.selectionView}>
          <FlatList
            data={data2}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <RoundListButton
                  id={item.id}
                  name={item.name}
                  onpress={setSelectedButtonId}
                  selectedId={selectedButtonId}
                />
              );
            }}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: 'space-evenly',
              width: '100%',
            }}
          />
        </View>
        <View style={styles.eventTextView}>
          <Text style={styles.eventText}>3 Ongoing Bookings</Text>
        </View>
        <View style={styles.bookingListWrapper}>
          <FlatList
            renderItem={BookingListItem}
            data={data}
            keyExtractor={item => item.id.toString()}
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: moderateScale(30),
            }}
          />
        </View>
      </ScrollView>
      <BottomNavigation route={routes.BOOKINGS} />
    </>
  );
}

const styles = StyleSheet.create({
  bookingListWrapper: {
    marginTop: moderateVerticalScale(15),
    marginHorizontal: moderateScale(10),
  },
  eventTextView: {
    marginTop: moderateVerticalScale(35),
    marginHorizontal: moderateScale(20),
  },
  eventText: {
    color: colors.grey,
    fontFamily: font.semiBold,
    fontSize: scale(16),
  },
  selectionView: {
    marginTop: moderateVerticalScale(20),
  },
  headingView: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(15),
  },
  heading: {
    fontSize: scale(23),
    color: colors.grey,
    fontFamily: font.extraBold,
  },
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: colors.screenbackground,
  },
});
