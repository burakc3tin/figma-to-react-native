import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import Users from '../Users/Users';
import AddUser from '../AddUser/AddUser';
import Welcome from '../Welcome/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 
 
  const LogoutComponent = ({ navigation }) => {
    const navigateToAddUser = () => {
      navigation.navigate('Welcome'); // AddUser ekranına yönlendirme
    };
  
    return (
      <TouchableOpacity
        onPress={navigateToAddUser}
        style={{
          position: 'absolute',
           right: 30, // Uygun bir değer ayarlayarak istediğiniz konumu belirleyebilirsiniz
          width: 60,
          height: 45,
          
           justifyContent: 'center',
          alignItems: 'center',
        }}
      >
            <Image
        source={require('../../assets/Logout/logout.png')}
        style={{width:25,height:25}}
      />
        <Text style={{ color: 'white', fontSize: 12,color:'#FF6464'  }}>Logout</Text>
      </TouchableOpacity>
    );
  };

const AddUserButton = ({ navigation }) => {
  const navigateToAddUser = () => {
    navigation.navigate('AddUser'); // AddUser ekranına yönlendirme
  };

  return (
    <TouchableOpacity
      onPress={navigateToAddUser}
      style={{
        position: 'absolute',
        bottom: 16, // Uygun bir değer ayarlayarak istediğiniz konumu belirleyebilirsiniz
        right: '40%', // Uygun bir değer ayarlayarak istediğiniz konumu belirleyebilirsiniz
        width: 60,
        height: 60,
        
        borderRadius: 30,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#FF6464', fontSize: 40 }}>+</Text>
    </TouchableOpacity>
  );
};

const UserListButton = ({ navigation }) => {
  const navigateToAddUser = () => {
    navigation.navigate('Users'); // AddUser ekranına yönlendirme
  };

  return (
    <TouchableOpacity
      onPress={navigateToAddUser}
      style={{
        position: 'absolute',
         right: 300, // Uygun bir değer ayarlayarak istediğiniz konumu belirleyebilirsiniz
        width: 60,
        height: 42,
         borderRadius: 30,
         justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <Image
        source={require('../../assets/Users/usersicon.png')}
        style={{width:40,height:40}}
      />
     </TouchableOpacity>
  );
};

export default function Home() {
  return (
    <Tab.Navigator>
       <Tab.Screen
        name="Users"
        component={Users} // Doğrudan bileşeni burada kullanabilirsiniz
        options={({ navigation }) => ({
          headerShown: false, // Doğru kullanım
          tabBarStyle: {
            backgroundColor: '#FFF', // Varsayılan arka plan rengi
          },
          tabBarButton: props => (
            <UserListButton {...props} navigation={navigation} />
          ),
        })}
      />


      <Tab.Screen
        name="AddUser"
        component={AddUser} // Doğrudan bileşeni burada kullanabilirsiniz
        options={({ navigation }) => ({
          headerShown: false, // Doğru kullanım
          tabBarStyle: {
            backgroundColor: '#FFF', // Varsayılan arka plan rengi
          },
          tabBarButton: props => (
            <AddUserButton {...props} navigation={navigation} />
          ),
        })}
      />

      <Tab.Screen
        name="LogoutButton"
        component={LogoutComponent}
        options={({ navigation }) => ({
          headerShown: 'false',
          tabBarStyle: {
            backgroundColor: '#FFF', // Varsayılan arka plan rengi
          },
          tabBarButton: props => (
            <LogoutComponent {...props} navigation={navigation} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
