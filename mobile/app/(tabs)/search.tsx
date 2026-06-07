import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import SearchInput from '@/components/searchInput'

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

  const [textSearch, setTextSearch] = useState("")
  const [trending, setTrending] = useState<SelectTrending[]>([])
  const [loading, setLoading] = useState(false)


  function fetchTrending(text = textSearch) {
    setLoading(true)
    const filteredTopics = TRENDING_TOPICS.filter(item => item.hashtags.toLowerCase().includes(text.toLowerCase()) || item.topic.toLowerCase().includes(text.toLowerCase()))

    setTimeout(() => {
      setTrending(filteredTopics);
      setLoading(false)
    }, 1000);
  }

  useEffect(() => {
    fetchTrending();
  }, [textSearch])


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
      <SearchInput  onChangeText={setTextSearch} value={textSearch} textPlaceholder="Search Twitter" placeholderTextColor="#657786" iconName="search" iconColor="#657786" />
      {/* Search List */}
      

  

<ScrollView className="flex-1">
        <View className='p-4'>
          <Text className="text-xl font-bold text-gray-900 mb-4">Treding for you</Text>


    {loading ? (
        <View className='text-center items-center justify-center flex-1 py-10'>
          <ActivityIndicator size="large" color="#1DA1F2" />
        </View>
      ) : (
          trending.map((item, index) => (
            <View key={index}>
              {trendingItem(item)}
            </View>
          ))
        )}
        </View>
      </ScrollView>
    
        
    </View>
  )
}

export default SearchScreen