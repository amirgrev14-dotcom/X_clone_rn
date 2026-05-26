import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SignOutBtn from '@/components/SignOutBtn'
import PostComposer from '@/components/PostComposer'
import { useUserSync } from '@/hooks/useUserSync'
import { Ionicons } from '@expo/vector-icons'
import PostList from '@/components/PostList'

const HomeScreen = () => {
  useUserSync()

  return (
    <View className='flex-1 bg-white'>
      {/* HEADER */}
      <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100">
        <Ionicons name="logo-x" size={24} color="#1E313D" />
        <Text className='text-xl font-bold text-gray-900'>Home</Text>
        <SignOutBtn />
      </View>

      {/* CONTENT */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        className='flex-1'
        contentContainerStyle={{paddingBottom: 80}}
        >
          <PostComposer />
          <PostList />
      </ScrollView>
    </View>
  )
}

export default HomeScreen