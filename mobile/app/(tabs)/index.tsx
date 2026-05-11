import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useClerk } from '@clerk/expo'
import SignOutBtn from '@/components/SignOutBtn'

const HomeScreen = () => {
  const { signOut } = useClerk()

  return (
    <View>
      <Text>home</Text>
      
    <SignOutBtn />
    </View>

  )
}

export default HomeScreen