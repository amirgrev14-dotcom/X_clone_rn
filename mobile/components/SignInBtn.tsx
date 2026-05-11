import { View, Text, TouchableOpacity, ActivityIndicator, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type SelectProps = {
  pathImage: ImageSourcePropType;
  isLoading?: boolean;
  onPress?: () => void;
  text: string;
  size?: { width: number; height: number };
  padding?: { paddingTop?: number; paddingBottom?: number; paddingLeft?: number; paddingRight?: number };
  margin?: { marginTop?: number; marginBottom?: number; marginLeft?: number; marginRight?: number };
}

const SignInBtn = (props: SelectProps) => {
    const { pathImage, size = { width: 20, height: 20}, margin, padding, isLoading = false, onPress, text} = props
  return (
        <TouchableOpacity
        
          className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
          onPress={onPress} 
          disabled={isLoading}
          style={[{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          }, padding, margin ]}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#4285F4" />
          ) : (
            <View className="flex-row items-center justify-center">

              { pathImage ? 
                <Image
                  source={pathImage}
                  className="mr-3"
                  style={size}
                  resizeMode="contain"
                />
              : null}

              <Text className="text-black font-medium text-base">{text}</Text>
            </View>
          )}
      </TouchableOpacity>

  )
}

export default SignInBtn