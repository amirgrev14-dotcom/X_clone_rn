import { View, Image, Text } from 'react-native'
import { useSocialAuth } from '@/hooks/useSocialAuth';
import SignInBtn from '@/components/SignInBtn';
import React from 'react'

const SignIn = () => {
  const { isLoading, currentStrategy, handleSocialAuth } = useSocialAuth()
  return (
      <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          {/* DEMO IMAGE */}
          <View className="items-center">
            <Image
              source={require("../../assets/images/fone/auth_login_1.png")}
              className="size-96"
              resizeMode="contain"
            />
          </View>

          <View className="flex-col gap-2">

          <View>
            <SignInBtn
              text="Sign in with Google"
              size={{ width: 25, height: 25}}
              isLoading={isLoading && currentStrategy === "oauth_google"}
              onPress={() => handleSocialAuth("oauth_google")}
              margin={{ marginBottom: 10, marginTop: 5}}
              pathImage={require('../../assets/images/no_fone/google.png')}  />

            <SignInBtn
              text="Sign in with Apple"
              isLoading={isLoading && currentStrategy === "oauth_apple"}
              onPress={() => handleSocialAuth("oauth_apple")}
              size={{ width: 25, height: 25}}
              pathImage={require('../../assets/images/no_fone/apple.png')}  />
          </View>

          <Text className="text-center text-gray-500 text-sm leading-4 mt-6 px-2">
              By signing up, you agree to our <Text className="text-blue-500">Terms</Text>
              {", "}
              <Text className="text-blue-500">Privacy Policy</Text>
              {", and "}
              <Text className="text-blue-500">Cookie Use</Text>.
          </Text>

          </View>
        </View>
      </View>
    </View>
    );
}

export default SignIn