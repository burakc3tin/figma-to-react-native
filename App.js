import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './Pages/Welcome/Welcome';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import EditUser from './Pages/EditUser/EditUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
     <Stack.Navigator>   
     <Stack.Screen name="Home" component={Home}    options={{ headerShown: false }} />

     <Stack.Screen name="Login" component={Login}    options={{ headerShown: false }} />

     <Stack.Screen name="Signup" component={Signup}    options={{ headerShown: false }} />

       <Stack.Screen name="Welcome" component={Welcome}    options={{ headerShown: false }} />

 
  
        <Stack.Screen name="EditUser" component={EditUser}    options={{ headerShown: false }} />

    </Stack.Navigator>
    </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40
  },
});
