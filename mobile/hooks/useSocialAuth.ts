import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = (): { isLoading: boolean, handleSocialAuth: (strategy:"oauth_google" | "oauth_apple") => void } => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO()

  const handleSocialAuth = async(strategy:"oauth_google" | "oauth_apple") => {
    setIsLoading(true)
    try {
      const { createdSessionId, setActive } = await startSSOFlow({strategy}) 
      
      if(createdSessionId && setActive ) {
        await setActive({session:createdSessionId})
      }

    } catch (err) {
      console.log("Error in Social Auth", err);
      const provider = strategy === "oauth_google" ? "Google" : "Apple"
      Alert.alert(`Error logging in with ${provider}, please try again`)
    } finally {
      setIsLoading(false)
    }
  };
  
  return {isLoading, handleSocialAuth}
}