import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import React from 'react'

const app = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">AORA</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} style={{ color: "blue", backgroundColor: "cyan" }}>Go to Profile</Link>
    </View>
  )
}

export default app