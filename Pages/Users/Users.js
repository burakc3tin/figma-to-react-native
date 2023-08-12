import { View, Text,StyleSheet,Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import EditUser from '../EditUser/EditUser';
 

export default function Users({navigation}) {
  const handleEditUser = () => {
    navigation.navigate('EditUser');
  };
  
const [fontsLoaded] = useFonts({
  Poppins: require('../../assets/fonts/Poppins-Bold.ttf'),
  PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
  PlusJakartaSans: require('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),


});
 
if(!fontsLoaded){
  return null;
}

  return (
    <View style={styles.main}>
      <Text style={styles.headerTitle}>Users</Text>


<TouchableOpacity onPress={handleEditUser}>
      <View style={styles.userdetail}>

      <View style={styles.userdetailfirst}> 
      <Image
        source={require('../../assets/Users/userprofile.png')}
        style={{width:40,height:40}}
      />
      <Text style={styles.userdetailtext}>Ralph Foster</Text>
      </View>
      <Text style={styles.active}>Active</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.userdetail} >
   
      <View style={styles.userdetailfirst}> 
      <Image
        source={require('../../assets/Users/userprofile.png')}
        style={{width:40,height:40}}
      />
      <Text style={styles.userdetailtext}>Willie Butler</Text>
      </View>
      <Text style={styles.active}>Active</Text>
   
      </View>

      
      <View style={styles.userdetail}>

      <View style={styles.userdetailfirst}> 
      <Image
        source={require('../../assets/Users/userprofile.png')}
        style={{width:40,height:40}}
      />
      <Text style={styles.userdetailtext}>Roger Guiterez</Text>
      </View>
      <Text style={styles.active}>Active</Text>
      </View>

    </View>

    
  )
}

const styles = StyleSheet.create({
 
main:{
  backgroundColor:'#F6F6F6',
  flex:1,
  alignItems:'center',
 },
  headerTitle:{
    
    fontFamily:'Poppins',
    fontSize:18,
    marginTop:100,
    marginBottom:40
  },
  userdetail:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#FFF',
    borderRadius:20,
    padding:15,
    marginTop:13,
    width:350
   },
  userdetailtext:{
    fontFamily:'PoppinsRegular',
    paddingLeft:10

  },
  active:{
    color:'green',
    backgroundColor:'#A6ED90',
    textAlign:'center',
    padding:5,
    borderRadius:5
  },
  userdetailfirst:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
   
  
});
