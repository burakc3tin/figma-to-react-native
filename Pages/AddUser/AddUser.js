import { View, Text,Image,TouchableOpacity,TextInput,StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function AddUser() {

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
        <StatusBar hidden/>
        <View style={styles.top}>
               <Image
        source={require('../../assets/General/backarrow.png')}
        style={styles.icon}
      />
       <Text style={styles.header}>Add User</Text>
       </View>

       <View style={styles.loginview}>
       <Image
        source={require('../../assets/AddUser/adduserprofile.png')}
        style={styles.loginicon}
      />
       </View>

      

       <View style={styles.inputs}>
       
        <TextInput style={styles.inputemail}
         placeholder="Full Name"
        />
          <TextInput style={styles.inputemail}
         placeholder="Phone Number"
        />
           <TextInput style={styles.inputemail}
         placeholder="E-Mail"
        />

<TextInput style={styles.inputemail}
         placeholder="Status"
        />
       </View>

       <View style={styles.buttoncontent}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Add</Text>
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
    marginLeft:80
   },
   top:{
    paddingTop:50,
     flexDirection:'row',
    alignItems:'center',
     },
  
     inputs:{
        alignItems:'center',
        marginTop:20
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
        padding:10,
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
        marginTop:60
     },
     button:{
        backgroundColor:'#42CD00',
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
     },
     loginview:{
        alignItems:'center'
     },
     loginicon:{
        width:70,
        height:70,
        marginTop:30
     }
     
    
  });
  