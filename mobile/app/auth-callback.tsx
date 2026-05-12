import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/expo'

const AuthCallBack = () => {
  const router = useRouter()
  const { isSignedIn } = useAuth()


  useEffect(() => {
    if(isSignedIn) {
      router.replace("/(tabs)")
    }
  }, [isSignedIn])

  return (
    <View className="flex-1 text-center justify-center">
      <ActivityIndicator size="large" color="#4285F4" />
    </View>
  )
}

export default AuthCallBack