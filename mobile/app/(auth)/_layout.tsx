import React from 'react'
import { useAuth } from '@clerk/expo'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  const { isLoaded } = useAuth()

  if(!isLoaded) {
    return null
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in"/>
    </Stack>
  )
}

export default AuthLayout