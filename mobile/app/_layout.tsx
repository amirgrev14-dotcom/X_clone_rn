import "../global.css"
import { Stack } from 'expo-router'
import { ClerkProvider, useAuth } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { StatusBar } from "expo-status-bar";


const RootLayout = () => {
  
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
  
    if (!publishableKey) {
      throw new Error('Add your Clerk Publishable Key to the .env file')
    }


    function RootStack() {
      const { isSignedIn } = useAuth()
      return (
        <>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={!isSignedIn}>
            <Stack.Screen name="(auth)" />
          </Stack.Protected>

          {/* result of boolean || undefined || null === every boolean type (!!) */}
          <Stack.Protected guard={!!isSignedIn}>
            <Stack.Screen name="(app)" />
          </Stack.Protected>
        </Stack>
        </>
      )
    }

    return (
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <RootStack />
        <StatusBar style="auto" />
      </ClerkProvider>
    )
  }

export default RootLayout