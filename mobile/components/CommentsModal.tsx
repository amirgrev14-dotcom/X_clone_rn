import { View, Text, Modal, TouchableOpacity, ScrollView, Image, TextInput, TextComponent, ActivityIndicator } from 'react-native'
import React, { JSX } from 'react'
import { Post } from '@/types';
import { useComments } from '@/hooks/useComment';
import { useCurrentUser } from '@/hooks/useCurrentUser';


interface CommentModalProps {
  selectedPost: Post,
  originalPostItem: () => JSX.Element;
  commentsPostItem: (comment: any) => JSX.Element;
  onClose: () => void;
}

const CommentsModal = ({ selectedPost, originalPostItem, commentsPostItem, onClose }: CommentModalProps) => {
  const { commentText, setCommentText, createComment, isCreatingComment } = useComments()
  const { currentUser } = useCurrentUser()
  console.log("current user in modal", currentUser.profilePicture)


  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setCommentText("")
    }, 100)
  }

  const handleCreate = async (id: string) => {
      createComment(id)
      setCommentText("")
  }

  return (
    <Modal visible={!!selectedPost} animationType='slide' presentationStyle='pageSheet'>
      {/* // HEADER */}
      <View className='flex-row items-center justify-between px-4 py-3 border-b border-gray-100'>
        <TouchableOpacity onPress={handleClose}>
          <Text className='text-blue-500 text-lg'>Close</Text>
        </TouchableOpacity>
          <Text className="text-lg font-semibold text">Comments</Text>
          <View className="w-12" />
      </View>
      {/* // CONTENT */}
      <ScrollView className="flex-1">
        {/* // CardPost */}
        {originalPostItem()} 

        
        {/* -- comments list */}
        <View className="flex-col items-start px-4 py-3 border-b border-gray-100">
          {selectedPost?.comments?.map((comment: any) => (
          <View key={comment._id} className="w-full">
            {  commentsPostItem(comment)}
          </View>
        
          ))}
      

          <View className='flex-row'>
              {/* // Comments */}
            <Image source={{ uri: currentUser.profilePicture}}
            className="size-10 rounded-full "
            />

        {/* -- block add comment input */}
              <View className="flex-1">
                <TextInput 
                  className="border border-gray-200 rounded-lg p-3 mx-2 text-base mb-3"
                  placeholder='Write a comment...'
                  value={commentText}
                  onChangeText={setCommentText}
                  multiline
                  numberOfLines={3}
                  text-AlignVertical="top"
                />

                <TouchableOpacity onPress={() => handleCreate(selectedPost?._id)} disabled={commentText.trim().length === 0}
              className={`px-6 py-2 self-start rounded-full ${
                commentText.trim() ? "bg-blue-500" : "bg-gray-300 opacity-30"
                }`}
                >
                  {isCreatingComment ? (
                          <ActivityIndicator size="small" color="white" />
                        ) : (
                          <Text
                            className={`font-semibold ${
                              commentText.trim() ? "text-white" : "text-gray-500"
                            }`}
                          >
                            Reply
                          </Text>
                        )}
                </TouchableOpacity>

              </View>
          </View>
      </View>
    </ScrollView>

            
    </Modal>
  )
}

export default CommentsModal
