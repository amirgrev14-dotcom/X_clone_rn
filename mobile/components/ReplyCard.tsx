import { View, Text, Image } from 'react-native'
import { Comment } from '@/types'
import React from 'react'

interface ReplyCardProps {
  comment: Comment
}

const ReplyCard = ({ comment }: ReplyCardProps) => {

  return (
    <View>
      <View className="flex-row">
        <Image
          source={{ uri: comment.user.profilePicture }}
          className="w-10 h-10 rounded-full mr-3"
        />

        <View className="flex-1">
          <View className="flex-row items-center mb-1">
            <Text className="font-bold text-gray-900 mr-1">
              {comment.user.firstName} {comment.user.lastName}
            </Text>
            <Text className="text-gray-500 text-sm ml-1">@{comment.user.username}</Text>
          </View>

          <Text className="text-gray-900 text-base leading-5 mb-2">{comment.content}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReplyCard
