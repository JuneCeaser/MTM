import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class AddScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddScreen</Text>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  }
})