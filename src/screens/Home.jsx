import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Alert,
  ActivityIndicator,
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
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

export default function Home() {
  // State variables to manage response data, loading state, and errors
  const [responseData, setResponseData] = useState(null); // Store fetched data
  const [loading, setLoading] = useState(true); // Loading state for API request
  const [error, setError] = useState(null); // Error state to handle any request failures
  const navigation = useNavigation(); // Navigation hook to navigate between screens
  // Fetch data when the component is mounted
  useEffect(() => {
    handleRequest(); // Call the request function when the component loads
  }, []);

  // Function to handle API requests using axios
  const handleRequest = async () => {
    setLoading(true); // Set loading to true before starting the request
    setError(null); // Reset error state

    try {
      // Make a POST request to the provided API endpoint
      const response = await axios.post(
        'https://dummyjson.com/c/fd9d-3e1a-4e36-8672',
      );
      setResponseData(response.data); // Save the response data in the state
      setLoading(false); // Set loading to false once the data is fetched
    } catch (err) {
      setError('An error occurred'); // Set error message in case of failure
      Alert.alert('Error', 'An error occurred while fetching data'); // Show an alert to the user
      setLoading(false); // Set loading to false after handling the error
    }
  };
  console.log(responseData);

  // If data is still loading, show a loader (ActivityIndicator)
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.linkblue} />
      </View>
    );
  }

  // If there's an error, display an error message
  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Main content that renders after data is loaded successfully
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        {/* Search bar component at the top */}
        <View style={{alignSelf: 'center'}}>
          <SearchView
            placeholder={'What are you looking for?'}
            navigation={navigation}
            data={responseData}
          />
        </View>

        {/* Section to explore different items */}
        <View style={styles.exploreView}>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Explore</Text>
          </View>

          {/* FlatList to display the list of items horizontally */}
          <FlatList
            data={responseData || []} // Use fetched data or an empty array if no data
            renderItem={({item}) => (
              <ListItem
                item={item}
                navigation={navigation}
                data={responseData}
              /> // Render each ListItem
            )}
            keyExtractor={item => item.id} // Unique key for each item
            horizontal={true}
            style={{marginTop: moderateVerticalScale(20)}}
          />
        </View>

        {/* Section to display popular items near the user */}
        <View style={styles.popularView}>
          <View style={styles.headingView}>
            <Text style={styles.heading}>Popular Near You</Text>
          </View>

          {/* FlatList to display the list of popular items */}
          <View style={styles.popularListWrapper}>
            <FlatList
              data={responseData || []} // Use fetched data or an empty array if no data
              keyExtractor={item => item.id.toString()} // Unique key for each item
              renderItem={({item}) => (
                <SingleList item={item} navigation={navigation} /> // Render each SingleList item
              )}
              style={{flexWrap: 'wrap', flexDirection: 'row'}} // Display items in a grid-like style
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation component */}
      <BottomNavigation route={routes.HOME} />
    </>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1, // Fills the screen
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    backgroundColor: colors.screenbackground, // Set background color
  },
  errorText: {
    color: colors.red, // Red color for error message
    fontSize: scale(18), // Font size for error message
  },
  popularListWrapper: {
    marginBottom: moderateVerticalScale(15), // Bottom margin for the list
    flexDirection: 'row', // Row-wise alignment
    flexWrap: 'wrap', // Wrap items to the next row when space runs out
  },
  popularView: {
    marginTop: moderateVerticalScale(10), // Top margin for the popular section
  },
  headingView: {
    marginHorizontal: moderateScale(20), // Horizontal margin for headings
  },
  heading: {
    fontSize: scale(23), // Font size for headings
    color: colors.grey, // Heading color
    fontFamily: font.extraBold, // Font style
  },
  exploreView: {
    marginTop: moderateVerticalScale(30), // Top margin for the explore section
  },
  container: {
    flex: 1, // Fills the screen
    margin: 0, // No margin
    padding: 0, // No padding
    flexDirection: 'column', // Layout the children in a column
    backgroundColor: colors.screenbackground, // Set background color for the container
  },
});
