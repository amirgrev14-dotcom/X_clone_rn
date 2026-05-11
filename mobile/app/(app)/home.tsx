import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useClerk } from '@clerk/expo'

const Home = () => {
  const { signOut } = useClerk()

  return (
    <View>
      <Text>home</Text>
      
    <TouchableOpacity onPress={() => signOut()}>
      <Text>Sign out</Text>
    </TouchableOpacity> 
    </View>

  )
}

export default Home