import { View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

interface SelectedProps {
  value: string;
  onChangeText?: (text: string) => void;
  textPlaceholder: string;
  iconName: keyof typeof Feather.glyphMap;
  iconColor: string;
  placeholderTextColor: string;
}

const SearchInput = (props: SelectedProps) => {
  const {textPlaceholder = "Search", iconName = "search", iconColor = "#657786", placeholderTextColor, onChangeText = () => {}, value = ""} = props 
  
  return (
    <View className='px-4 py-2 border-b border-gray-100'>
        <View className='px-3 flex-row items-center bg-gray-100 rounded-full'>
          <Feather name={iconName} size={20} color={iconColor} />
          <TextInput placeholder={textPlaceholder} className="flex-1 ml-3 text-base" placeholderTextColor={placeholderTextColor} value={value} onChangeText={onChangeText}  />  
        </View>
    </View>
  )
}

export default SearchInput