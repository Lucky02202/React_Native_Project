import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    display : 'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  }
})