import React from 'react'
import { useAuth } from '@clerk/expo'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  const { isLoaded, isSignedIn } = useAuth()

  if(!isLoaded) {
    return null
  }


  if(isSignedIn) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)"/>
      </Stack>
    )
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in"/>
    </Stack>
  )
}

export default AuthLayout