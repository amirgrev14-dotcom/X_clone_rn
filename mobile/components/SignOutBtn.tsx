import { TouchableOpacity } from 'react-native'
import { useSignOut } from '@/hooks/useSignOut'
import { Feather } from '@expo/vector-icons'
import React from 'react'

const SignOutBtn = () => {
  const { handleSignOut } = useSignOut();
  return (
    <TouchableOpacity 
        onPress={handleSignOut}
        accessibilityLabel="Sign out"
        accessibilityRole="button"
        accessibilityHint="Signs you out of your account"
      >
      <Feather name="log-out" size={24} color="#E0245E" />
    </TouchableOpacity>
  )
}

export default SignOutBtn