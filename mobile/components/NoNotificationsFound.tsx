import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const NoNotificationsFound = () => {
  return (
    <View className='flex-1 items-center justify-center px-8' style={{ minHeight: 400}}>
      <View className='items-center'>
        <Feather name="bell" size={80} color="#E1E8ED" />
        <Text className='text-2xl text-center font-semibold text-gray-500 mt-6 leading-6 max-w-xs'>
          No notifications yet
        </Text>
        <Text className='text-gray-400 text-center text-lg mt-6 leading-6 max-w-xs'>
           When people like, comment, or follow you, you&apos;ll see it here.
        </Text>
      </View>
    </View>
  )
}

export default NoNotificationsFound