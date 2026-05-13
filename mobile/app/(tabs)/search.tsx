import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchScreen = () => {

  const TRENDING_TOPICS = [
    {topic: "mobile Technology", hashtags: "#ReactNative", tweets: "106K"},
    {topic: "Web Development", hashtags: "#TypeScript", tweets: "90K"},
    {topic: "Web Development", hashtags: "#Angular", tweets: "10K"},
    {topic: "AI", hashtags: "#AI", tweets: "140K"},
    {topic: "Flutter", hashtags: "#Flutter", tweets: "120K"},
        {topic: "mobile Technology", hashtags: "#ReactNative", tweets: "106K"},
    {topic: "Web Development", hashtags: "#TypeScript", tweets: "90K"},
    {topic: "Web Development", hashtags: "#Angular", tweets: "10K"},
    {topic: "AI", hashtags: "#AI", tweets: "140K"},
    {topic: "Flutter", hashtags: "#Flutter", tweets: "120K"},    {topic: "mobile Technology", hashtags: "#ReactNative", tweets: "106K"},
    {topic: "Web Development", hashtags: "#TypeScript", tweets: "90K"},
    {topic: "Web Development", hashtags: "#Angular", tweets: "10K"},
    {topic: "AI", hashtags: "#AI", tweets: "140K"},
    {topic: "Flutter", hashtags: "#Flutter", tweets: "120K"},    {topic: "mobile Technology", hashtags: "#ReactNative", tweets: "106K"},
    {topic: "Web Development", hashtags: "#TypeScript", tweets: "90K"},
    {topic: "Web Development", hashtags: "#Angular", tweets: "10K"},
    {topic: "AI", hashtags: "#AI", tweets: "140K"},
    {topic: "Flutter", hashtags: "#Flutter", tweets: "120K"},
  ]


  interface SelectTrending {
    topic: string;
    tweets: string;
    hashtags: string;
  }


  const trendingItem = (item: SelectTrending) => {
    return (
      <>
      <TouchableOpacity className="py-3 border-b border-gray-100">
        <Text className="text-gray-500 text-sm">{item.topic}</Text>
        <Text className="font-bold text-gray-900 text-lg">{item.hashtags}</Text>
        <Text className="text-gray-500 text-sm">{item.tweets}</Text>
      </TouchableOpacity>
      </>
    )
  }


  return (
    <View className='bg-white flex-1'>

      {/* Header */}
        <View className='px-4 py-3 border-b border-gray-100'>
          <View className='px-3 flex-row items-center bg-gray-100 rounded-full'>
            <Feather name="search" size={20} color="#657786" />
            <TextInput placeholder="Search Twitter" className="flex-1 ml-3 text-base" placeholderTextColor="#657786" />
              
          </View>
        </View>
      {/* Search List */}
      <ScrollView className="flex-1">
        <View className='p-4'>
          <Text className="text-xl font-bold text-gray-900 mb-4">Treding for you</Text>

          {TRENDING_TOPICS.map((item, index) => (
            <View key={index}>
              {trendingItem(item)}
            </View>
          ))}
        </View>
      </ScrollView>
        
    </View>
  )
}

export default SearchScreen