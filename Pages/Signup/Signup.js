import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';

export default function Signup({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
 };

 const handleSignup = async () => {
   try {
     if (!isEmailValid(email)) {
       console.log('Invalid email format');
       return;
     }

     const response = await fetch('http://116.203.196.162:3000/users', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         user_fullname: fullName,
         user_email: email,
         user_password: password, // Burada şifre alanını user_password olarak düzeltin
       }),
     });

     const data = await response.json();

     if (response.ok) {
       navigation.navigate('Login');
     } else {
       console.log('Signup failed:', data);
     }
   } catch (error) {
     console.error('Signup error:', error);
   }
 };
 
 const [fontsLoaded] = useFonts({
   Poppins: require('../../assets/fonts/Poppins-Bold.ttf'),
   PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
   PlusJakartaSans: require('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),


});
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.main}>
      <StatusBar hidden />
      <View style={styles.top}>
        <Image
          source={require('../../assets/General/backarrow.png')}
          style={styles.icon}
        />
        <Text style={styles.header}>Sign Up</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contenthellothere}>Hello There 🖐</Text>
        <Text style={styles.contentcreateaccount}>Create an account</Text>
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.inputfullname}
          placeholder="Full Name"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        <TextInput
          style={styles.inputemail}
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.inputpassword}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <View style={styles.buttoncontent}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttontext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#F6F6F6',
        height:'100%'
    },
   icon:{
    width: 44, 
    height: 44,
    borderColor:'#DDE2E3',
    borderWidth:1,
    borderRadius:15,
    flex:1.5,
    marginLeft:21
    },
   header:{
    fontFamily:'Poppins',
    fontSize:18,
    lineHeight:24,
    letterSpacing:1,
    height:24,
    color:'#2A2A2E',
    flex:7,
    marginLeft:105
   },
   top:{
    paddingTop:50,
     flexDirection:'row',
    alignItems:'center',
     },
     content:{
        marginTop:90,
        marginLeft:27
     },
     contenthellothere:{
        color:'#282828',
        fontSize:14,
        lineHeight:25,
        height:25,
        textAlign:'justify',
        fontFamily:'PoppinsRegular',
        marginBottom:5
      
     },
     contentcreateaccount:{
        color:'#292D32',
        fontSize:25,
        lineHeight:35,
        height:35,
        textAlign:'justify',
        fontFamily:'PlusJakartaSans'
     },
     inputs:{
        alignItems:'center',
        marginTop:50
     },
     inputfullname:{
        width:350,
        backgroundColor:'#FFF',
        padding:15,
        margin:10,
        borderRadius:13
     },
     inputemail:{
        width:350,
        backgroundColor:'#FFF',
        padding:15,
        margin:10,
        borderRadius:13
     },
     inputpassword:{
        width:350,
        backgroundColor:'#FFF',
        padding:15,
        margin:10,
        borderRadius:13,
        
     },
     buttoncontent:{
        alignItems:'center',
        marginTop:80
     },
     button:{
        backgroundColor:'#FF6464',
        gap:10,
        width:350,
        paddingTop:15,
        paddingBottom:15,
        borderRadius:30
     },
     buttontext:{
        color:'#FFF',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16
     }
     
    
  });
  