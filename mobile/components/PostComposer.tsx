import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/expo'
import {useCreatePost} from '@/hooks/useCreatePost'
import FeatherBtn from "@/components/FeatherBtn"
import { Feather } from '@expo/vector-icons'

const PostComposer = () => {
  const { content, setContent, selectedImage, isCreating, pickImageFromGallery,
    takePhoto, removeImage, createPost } = useCreatePost()

    const { user } = useUser()
    const isDisabled = isCreating || !content.trim() || !!selectedImage

  return (
  <View className='border-b border-gray-50 p-4 bg-white'>
    <View className='flex-row'>
      <Image
        source={{ uri: user?.imageUrl }}
        className='w-12 h-12 rounded-full mr-3'
      />
      <View className='flex-1'>
        <TextInput
          placeholder='What`s happening?'
          placeholderTextColor="#657786"
          multiline
          value={content}
          onChangeText={setContent}
          maxLength={280}
        />
      </View>
    </View>

    {selectedImage && (
      <View className='mt-3 ml-15'>
        <View className='relative'>
          <Image
            source={{uri: selectedImage}}
            className='w-full h-48 rounded-2xl'
            resizeMode="cover"
            />

            <TouchableOpacity 
              className='absolute top-2 right-2 w-8 h-8 bg-black bg-opacity-60 rounded-full items-center justify-center'
              onPress={removeImage}
              >
                <Feather name="x" size={16} color="white"  />
            </TouchableOpacity>
        </View>
      </View>
    )}

      {/* Comment Options */}
      <View className='flex-row justify-between mt-3'>
        <View className='flex-row gap-3'>
          <FeatherBtn name="image" size={20} color="#1DA1F2" disabled={isDisabled} onPress={pickImageFromGallery} />
          <FeatherBtn name="camera" size={20} color="#1DA1F2" disabled={isDisabled} onPress={takePhoto} />
        </View>

          {/* Comment length indicator */}
          {/* Post Button */}
          <View className="flex-row items-center">
              {content.length > 0 && (
                <Text className={`text-sm mr-3 ${content.length > 260 ? "text-red-500" : "text-gray-500"}`}> 
                {280 - content.length}
                </Text>
              )}

              {isCreating ? (
                <ActivityIndicator size="small" color="white" />
              ): null}

              <TouchableOpacity className='rounded-full w-20 h-8 items-center justify-center bg-slate-300' onPress={createPost}>
                <Text className='text-gray-600 font-bold'>Post</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  )
} 

export default PostComposer