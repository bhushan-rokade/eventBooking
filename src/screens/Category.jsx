import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font, routes} from '../utils/constants';
import SingleList from '../components/Home/SingleList';
import {useNavigation} from '@react-navigation/native';
import LeftArrowIcon from '../icons/LeftArrowIcon';

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
    date: '11/9/2024',
    desc: "Throughout the concert, Coldplay seamlessly navigated between anthems and more intimate moments, showcasing their versatility and artistry. Chris Martin's interactions with the crowd, filled with genuine warmth and humility, made the colossal arena feel like an intimate gathering of friends.",
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
export default function Category() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrowIcon />
          </TouchableOpacity>
          <Text style={[styles.heading, {flex: 0.93, textAlign: 'center'}]}>
            Music
          </Text>
        </View>
        <View style={styles.EventView}>
          <View style={styles.headingView}>
            <Text style={[styles.heading, {fontSize: scale(20)}]}>
              38 Events
            </Text>
          </View>
          <View style={styles.EventWrapper}>
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <SingleList item={item} navigation={navigation} />
              )}
              style={{flexWrap: 'wrap', flexDirection: 'row'}}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(20),
  },
  EventWrapper: {
    marginBottom: moderateVerticalScale(15),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  EventView: {
    marginTop: moderateVerticalScale(10),
  },
  headingView: {
    marginHorizontal: moderateScale(20),
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
