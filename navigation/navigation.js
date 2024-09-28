import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from '../src/utils/constants';
import Home from '../src/screens/Home';
import Bookings from '../src/screens/Bookings';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
