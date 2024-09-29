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
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

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

export default function Bookings() {
  const data = useSelector(state => state.bookings);
  const [selectedButtonId, setSelectedButtonId] = useState(1);
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.headingView}>
          <Text style={styles.heading}>Your Bookings</Text>
        </View>
        <View style={styles.eventTextView}>
          <Text style={styles.eventText}>{data.length} Bookings</Text>
        </View>
        <View style={styles.bookingListWrapper}>
          <FlatList
            renderItem={item => {
              return (
                <BookingListItem
                  item={item.item.eventData}
                  navigation={navigation}
                />
              );
            }}
            data={data}
            keyExtractor={item => item.eventData.id}
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
