import React,{useCallback} from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
 
 
const Welcome = () => {
  
  const [fontsLoaded] = useFonts({
    PlusJakartaSans: require('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    PlusJakartaSansRegular: require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),

  });
   
  if(!fontsLoaded){
    return null;
  }
  return(
  <View style={styles.container}>
    <ImageBackground source={require('./background.png')} resizeMode="cover" style={styles.image}>

  <View style={styles.onboarding}>
    <Text style={styles.header}>Korem Ipsum Dolor Sit Amet Consectetur</Text>
    <Text style={styles.content}>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus</Text>
    <TouchableOpacity style={styles.loginbutton}><Text style={styles.loginbuttontext}>Login</Text></TouchableOpacity>
    <TouchableOpacity style={styles.signupbutton}><Text style={styles.signupbuttontext}>Sign Up</Text></TouchableOpacity>

   </View>
    </ImageBackground>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  onboarding:{
    backgroundColor:'#fff',
    height:'50%',
    justifyContent:'center',
    alignItems:'center',
     borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  header:{
  fontFamily:'PlusJakartaSans',
  lineHeight:37,
  fontSize:30,
  fontWeight:'800',
  letterSpacing:1,
  textAlign:'center',
  height:76

  },
  content:{
    color:'#7F879E',
    fontFamily:'PlusJakartaSansRegular',
    fontSize:14,
    width:279,
    textAlign:'center',
    lineHeight:24,
    height:84,
    marginTop:20,
    marginBottom:20
  },
  loginbutton:{
    backgroundColor:'#FF6464',
    gap:10,
    width:330,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:30
  },
   loginbuttontext:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16


   },
   signupbutton:{
    backgroundColor:'#74C6F7',
    gap:10,
    width:330,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:30,
    marginTop:12
  },
   signupbuttontext:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16


   },
  
});

export default Welcome;
