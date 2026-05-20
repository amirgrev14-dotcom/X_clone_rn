import { View, Text } from 'react-native'
import React from 'react'
import SignOutBtn from '@/components/SignOutBtn'
import { useUserSync } from '@/hooks/useUserSync'

const HomeScreen = () => {
  useUserSync()

  return (
    <View>
      <Text>home</Text>
      
      <SignOutBtn />
    </View>

  )
}

export default HomeScreen