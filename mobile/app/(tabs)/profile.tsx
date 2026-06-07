import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import EditProfileModal from '@/components/EditProfileModal'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SignOutBtn from '@/components/SignOutBtn'
import Feather from '@expo/vector-icons/build/Feather'
import FeatherBtn from '@/components/FeatherBtn'
import { Alert } from 'react-native'
import PostsList from '@/components/PostList'
import { format } from 'date-fns'
import { usePosts } from '@/hooks/usePosts'
import { useProfile } from '@/hooks/useProfile'

const ProfileScreen = () => {
  const {  currentUser,  isLoading } = useCurrentUser()
  const {
        posts: userPosts,
        refetch: refetchPosts,
        isLoading: isRefetching
      } = usePosts(currentUser?.username)

  const {
    isEditModalVisible,
    openEditModal,
    closeEditModal,
    formData,
    saveProfile,
    updateFormField,
    isUpdating,
    refetch: refetchProfile,
  } = useProfile();


  const insets = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View className={"flex-1 bg-white items-center justify-center"}>
          <ActivityIndicator size="large" color={"#1DA1F2"} />
      </View>
    )
  }

  const handleCheckIcon = () => {
    // Handle check icon press (e.g., show verification details)
    Alert.alert(
      "This user is verified!", 
      "This account has been verified by Twitter",
      [{ text: "OK", style: "default" }]
    )
  }
  
  const handleLocationPress = () => {
    Alert.alert(
      "Location Info",
      "your location this is just for demo purposes and is not editable",
      [{ text: "OK", style: "default" }]
    )
  }

  return (
    <View className='flex-1 bg-white' >
      <View className='flex-row items-center justify-between px-4 py-3 border-b border-gray-100'>
          <View>
            <Text className="text-xl font-bold text-gray-900">
                {currentUser.firstName} {currentUser.lastName}
            </Text>
            <Text className="text-gray-500 text-sm">{userPosts.length} posts</Text>
          </View>
          <SignOutBtn  />
        </View>

        <ScrollView
          className='flex-1'
          contentContainerStyle={{paddingBottom: 100 + insets.bottom}}
          showsVerticalScrollIndicator={false}
        >
          <View className="relative">
            <Image source={{uri: currentUser.bannerImage || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"}}
            className="w-full h-48"
            resizeMode="cover"
            />
            <View className="px-4 -b-4 border-b border-gray-100 ">
              <View className="flex-row justify-between items-end -mt-16 mb-4">
                <Image source={{ uri: currentUser.profilePicture }} className="w-32 h-32 rounded-full border-4 border-white"  />

                <TouchableOpacity onPress={openEditModal} className="border border-gray-300 px-6 py-2 rounded-full">
                  <Text className="text-gray-900 font-semibold">Edit Profile</Text>
                </TouchableOpacity>
              </View>

              {/*  Info user */}
              <View className="mb-4">
                <View className="flex-row items-center mb-1">
                    <Text className="text-xl font-bold text-gray-900 mr-1"> { currentUser.firstName } {currentUser.lastName}</Text>
                    <FeatherBtn featherName="check-circle" size={20} color="#657786" onPress={() => handleCheckIcon()} />
                </View>

                <Text className="text-gray-500 mb-2">@{currentUser.username}</Text>
                <Text className="text-gray-900 mb-3">{currentUser.bio}</Text>
              
                <View className="flex-row items-center mb-2">
                    <FeatherBtn featherName="map-pin" size={20} color="#657786" onPress={handleLocationPress} />
                    <Text className="text-gray-500 ml-2">{currentUser.location}</Text>
                </View>

                  <View className="flex-row items-center mb-3">
                      <Feather name="calendar" size={16} color="#657786" />
                      <Text className="text-gray-500 ml-2">Joined March {format(new Date(currentUser.createdAt), "MMMM yyyy")}</Text>
                  </View>

                  {/*  Follow stats */}

              <View className="flex-row items-center mb-4">
                <TouchableOpacity className="mr-6">
                  <Text className="text-gray-900">
                      <Text className="font-bold">{currentUser.following?.length || 0}</Text>
                      <Text className="text-gray-500"> Following</Text>
                  </Text>
              </TouchableOpacity>

              {/*  count Followers and Following */}
                <TouchableOpacity className="mr-6">
                    <Text className="text-gray-900">
                      <Text className="font-bold">{currentUser.followers?.length || 0}</Text>
                      <Text className="text-gray-500"> Followers</Text>
                    </Text>
                </TouchableOpacity>
              </View>

              </View>
            </View>

            <PostsList username={currentUser.username} />  

          </View>


      <EditProfileModal
        isVisible={isEditModalVisible}
        onClose={closeEditModal}
        formData={formData}
        saveProfile={saveProfile}
        updateFormField={updateFormField}
        isUpdating={isUpdating}
      />

        </ScrollView>
    </View>
  )
}

export default ProfileScreen