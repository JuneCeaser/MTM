import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'
import Signup from './Signup'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
      title="Go to Singup page"
      onPress={() =>
        navigation.navigate(Signup)
      }
     
    />
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});