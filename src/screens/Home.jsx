import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import SearchView from '../components/Home/SearchView';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {colors, font, routes} from '../utils/constants';
import ListItem from '../components/Home/ListItem';
import SingleList from '../components/Home/SingleList';
import BottomNavigation from '../components/BottomNavigation';

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
const height = Dimensions.get('window').height;
export default function Home() {
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{alignSelf: 'center'}}>
          <SearchView placeholder={'What are you looking for?'} />
        </View>
        <View style={styles.exploreView}>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Explore</Text>
          </View>
          <FlatList
            data={data}
            renderItem={ListItem}
            keyExtractor={item => item.id}
            horizontal={true}
            style={{marginTop: moderateVerticalScale(20)}}
          />
        </View>
        <View style={styles.popularView}>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Popular Near You</Text>
          </View>
          <View style={styles.popularListWrapper}>
            <FlatList
              renderItem={SingleList}
              data={data}
              keyExtractor={item => item.id}
              style={{flexWrap: 'wrap', flexDirection: 'row'}}
            />
          </View>
        </View>
      </ScrollView>
      <BottomNavigation route={routes.HOME} />
    </>
  );
}

const styles = StyleSheet.create({
  popularListWrapper: {
    marginBottom: moderateVerticalScale(15),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  popularView: {
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
  exploreView: {
    marginTop: moderateVerticalScale(30),
  },
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: colors.screenbackground,
  },
});
