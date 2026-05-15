import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useClerk } from '@clerk/expo'
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