import { useSSO } from "@clerk/expo";
import { useState } from "react";
import * as AuthSession from "expo-auth-session"
import { Alert } from "react-native";

  export const useSocialAuth = (): { isLoading: boolean, currentStrategy: "oauth_google" | "oauth_apple", handleSocialAuth: (strategy:"oauth_google" | "oauth_apple") => void } => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentStrategy, setCurrentStrategy] = useState<"oauth_google" | "oauth_apple">("oauth_google")
    const { startSSOFlow } = useSSO()

    const handleSocialAuth = async(strategy:"oauth_google" | "oauth_apple") => {
      setIsLoading(true)
      setCurrentStrategy(strategy)

      try {
        const redirectUrl = AuthSession.makeRedirectUri({
          scheme: "myapp",
          path: "/auth-callback"
        })

        const { createdSessionId, setActive } = await startSSOFlow({ strategy, redirectUrl })

        if (createdSessionId && setActive) {
          await setActive({ session: createdSessionId })
        }

      } catch (err) {
        console.log("Error in Social Auth", err);
        const provider = strategy === "oauth_google" ? "Google" : "Apple"
        Alert.alert(`Error logging in with ${provider}, please try again`)
      } finally {
        setIsLoading(false)
      }
  };
  
  return {isLoading, currentStrategy, handleSocialAuth}
}