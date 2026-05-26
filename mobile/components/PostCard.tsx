import { View, Text, Alert, Image, TouchableOpacity } from 'react-native'
import { Post, User } from '@/types'
import React, { useState } from 'react'
import { formatDate, formatNumber } from '@/utils/formatters';
import { AntDesign, Feather } from '@expo/vector-icons';
import FeatherBtn from './FeatherBtn';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onDelete: (postId: string) => void;
  isLiked: boolean;
  currentUser: User;
}

const PostCard = ({ currentUser, onDelete, onLike, post, isLiked }: PostCardProps) => {

  const [isLikeActive, setIsLikeActive] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes?.length || 0)

  const isOwnPost = post.user._id === currentUser._id

  const handleDelete = () => {
    Alert.alert("Delete Post", "Are you sure want to delete this post?",
      [
        {text: "Delete", style: "destructive", onPress: () => onDelete(post._id)},
        {text: "Cancel", style: "cancel"}
      ]
    )
  }


  const handleLike = (postId: string) => {
    setIsLikeActive(!isLikeActive)
    setLikeCount(prev => isLikeActive ? prev - 1 : prev + 1)
    onLike(postId)
  }

  return (
    <View className='border-b border-gray-100 bg-white'>
      <View className='flex-row p-4'>
        <Image source={{uri: post.user.profilePicture || ""}}
          className='w-12 h-12 rounded-full mr-3'
        />
        {/* POST HEADER */}
        <View className='flex-1'>
          <View className='flex-row items-center justify-between mb-1'>

            <View className='flex-row items-center'>
              <Text className='font-bold text-gray-900 mr-1'>
                {post.user.firstName} {post.user.lastName}

                <Text className='text-gray-500 ml-1'>
                  @{post.user.username} . {formatDate(post.createdAt)}
                </Text>
              </Text>
            </View>

              { isOwnPost && (
                <TouchableOpacity onPress={handleDelete}>
                  <Feather name="trash" size={20} color="#657786" />
                </TouchableOpacity>
              ) }
                      
          </View>

          {post.content && (
            <Text className="text-gray-900 text-base leading-5 mb-3">{post.content}</Text>
          )}

          {post.image &&  (
            <Image 
              source={{ uri: post.image}}
              className='w-full h-48 rounded-2xl mb-3'
              resizeMode='cover'
            />
          )}

          <View className='flex-row justify-between xxsm:max-w-full lg:max-w-sm mt-4'>
              <FeatherBtn featherName="message-circle" size={18} color="#657786" onPress={() => {}} inText={formatNumber(post.comments?.length || 0)} />
              <FeatherBtn featherName="repeat" size={18} color="#657786" onPress={() => {}} inText="0" />

            <TouchableOpacity className="flex-row items-center" onPress={() => handleLike(post._id)}>
              {isLikeActive || isLiked ? (
                <AntDesign name="heart" size={18} color="#E0245E" />
              ) : (
                <Feather name="heart" size={18} color="#657786" />
              )}

              <Text className={`text-sm ml-2 ${isLikeActive || isLiked ? "text-red-500" : "text-gray-500"}`}>
                {formatNumber(likeCount)}
              </Text>
            </TouchableOpacity> 
              
              
              <FeatherBtn featherName="share" size={18} color="#657786" onPress={() => {}} inText="0" />
          </View>
        </View>
        </View>

    </View>
  );
};

export default PostCard