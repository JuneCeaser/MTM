import { View, Text,Button,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import Signup from './Signup'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.maintextcontainer}>
      <Text style={styles.maintext}>Create  an account</Text>
      </View>
      <View style={styles.inputcontainer}>
             <View style={styles.inputitem}>
              <Text  >Name</Text>
             <TextInput
          style={styles.input}
           placeholder="June Ceaser"
        />
             </View>
         <View style={styles.inputitem}>
              <Text  >E mail</Text>
             <TextInput
          style={styles.input}
           placeholder="june@mainframe.lk"
        />
             </View>
        <View style={styles.inputitem}>
              <Text  >Password</Text>
             <TextInput
          style={styles.input}
           placeholder="June Ceaser"
        />
             </View>
      </View>
      <View style={styles.signupbuttoncontainer}>

      </View>
    </View>
  )

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  maintextcontainer:{
    flex:1,
    backgroundColor:'#ffffff',
    paddingTop: 20,
  },
  maintext:{
     fontSize: 35,
     fontWeight: '600',
     paddingTop:30,
     paddingLeft: 10,
  },
  inputcontainer:{
    flex:3,
    backgroundColor:'#ffffff'
  },
  signupbuttoncontainer:{
    flex:3,
    backgroundColor: '#ffffff'
  },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
  },
  inputitem:{
    padding:10,
  }
});