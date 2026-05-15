import "../global.css"
import { Stack, useRouter, usePathname, Redirect } from 'expo-router'
import * as Linking from 'expo-linking'
import { ClerkProvider, useAuth } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const RootLayout = () => {
  // const router = useRouter()
  // const pathname = usePathname() // get the current url of the user
  // const CALLBACK_PATH = "myapp://xclone"

  
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
            <Stack.Screen name="(tabs)" />
          </Stack.Protected>
        </Stack>
        </>
      )
    }

    return (
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <QueryClientProvider client={queryClient}>
        <SafeAreaView edges={["bottom"]} className="flex-1">
          <RootStack />
        </SafeAreaView>
        <StatusBar style="auto" />
        </QueryClientProvider>
      </ClerkProvider>
    )
  }

export default RootLayout