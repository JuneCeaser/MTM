import { View, Text,Button } from 'react-native'
import React from 'react'
import Signup from './Signup'

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <Button
      title="Go to Singup page"
      onPress={() =>
        navigation.navigate(Signup)
      }
    />
    </View>
  )
}