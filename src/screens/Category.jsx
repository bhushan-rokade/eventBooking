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

export default function Category({route}) {
  const {data, cat} = route.params;
  const filtered = data.filter(item => {
    if (item.categoryText == cat) return item;
  });
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
              {filtered.length} Events
            </Text>
          </View>
          <View style={styles.EventWrapper}>
            <FlatList
              data={filtered}
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
    marginTop: moderateVerticalScale(30),
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
