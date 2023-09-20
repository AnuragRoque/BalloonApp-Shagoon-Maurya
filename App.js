import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BalloonPage from './BalloonPage';
import UserFormScreen from './UserFormScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Balloon">
        <Stack.Screen name="Balloon" component={BalloonPage} />
        <Stack.Screen name="Form" component={UserFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
