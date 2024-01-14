import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import Login from './components/login';
import Register from './components/register';
import Portofolio from './components/portofolio';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
           <Stack.Screen name='Register' component={Register}/>
           <Stack.Screen name='Porto' component={Portofolio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;