import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from '../src/utils/constants';
import Home from '../src/screens/Home';
import Bookings from '../src/screens/Bookings';
import BookingDetails from '../src/screens/BookingDetails.jsx';
import BookEvent from '../src/screens/BookEvent.jsx';
import Category from '../src/screens/Category.jsx';
import SearchScreen from '../src/screens/SearchScreen.jsx';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.HOME}
          component={Home}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.BOOKINGS}
          component={Bookings}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.BOOKINGDETAILS}
          component={BookingDetails}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.BOOKEVENT}
          component={BookEvent}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.CATEGORY}
          component={Category}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'screen',
          }}
        />
        <Stack.Screen
          name={routes.SEARCH}
          component={SearchScreen}
          options={{
            animationEnabled: true,
            animationTypeForReplace: 'push',
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
