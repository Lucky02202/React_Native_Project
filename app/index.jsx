import { Image, ScrollView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'

const app = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center px-4">
          <Image
            className="w-[130px] h-[180px]"
            resizeMode='contain'
            source={images.logo}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default app