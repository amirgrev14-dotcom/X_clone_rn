import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import React from 'react'
import { useNotifications } from '@/hooks/useNotification'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import NoNotificationsFound from '@/components/NoNotificationsFound'
import NotificationCard from '@/components/NotificationCard'
import { Notification } from '@/types'
import FeatherBtn from '@/components/FeatherBtn'

  const NotificationsScreen = () => {
    const { notifications, isLoading, error, refetch, isRefetching } = useNotifications()
    const insets = useSafeAreaInsets()
    
    const chooseContentItem = (notifications: any)  => {

      if(error) {
        return (
        <View className="flex-1 items-center justify-center p-8">
          <Text className='text-gray-500 mb-4'>Failed to load notifications</Text>
          <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg"
          onPress={() => refetch()}
          >
            <Text className="text-white font-semibold">Retry</Text>
          </TouchableOpacity>
        </View>
        )
      }

      if(isLoading || isRefetching) { 
        return (
        <View className='flex-1 items-center justify-center p-8'>
          <ActivityIndicator size="large" color="#1DA1F2" />
          <Text className='text-gray-500'>Loading notifications...</Text>
        </View>
        )
      }

      if(notifications.length === 0) {
        return (
          <NoNotificationsFound />
        )
      }

      return notifications.map((notification: Notification) => (
          <NotificationCard 
            onDelete={() => {}}
            key={notification._id}
            notification={notification}
          />
        ))

    }



    return (
      <View className='flex-1'>
        {/* Header */}
        <View className='flex-row items-center justify-between px-4 py-3 border-b border-gray-100'>
          <Text className='text-xl font-bold text-gray-900'>Notifications</Text>
          <FeatherBtn featherName='settings' size={24} color='#657786' />
        </View>


        {/* Content */}
        <ScrollView
          className='flex-1'
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} tintColor="#1DA1F2" />
          }
          contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
          showsHorizontalScrollIndicator={false}
        >

        { chooseContentItem(notifications) }
        </ScrollView>

      </View>
    )
  }

export default NotificationsScreen
