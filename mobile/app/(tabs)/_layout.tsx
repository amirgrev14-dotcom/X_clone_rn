
import { Redirect, Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { useAuth } from '@clerk/expo'


const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  const { isSignedIn } = useAuth();

  return (
      <Tabs screenOptions={
        {
          tabBarActiveTintColor: "#1DA1F2",
          tabBarInactiveTintColor: "#657786",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            height: 55 + insets.bottom,
            paddingTop: 8,
          },
          headerShown: false,            
        }}>

      <Tabs.Screen
        name="index"
        options={
          {
            title: "",
            tabBarAccessibilityLabel: "Home tab",
            tabBarIcon:({color, size}) => <Feather name="home" size={size} color={color} /> 
            }} />

      <Tabs.Screen
        name="search"
        options={
          {
            title: "",
            tabBarAccessibilityLabel: "Search tab",
            tabBarIcon:({color, size}) => <Feather name="search" size={size} color={color} /> 
            }} />

      <Tabs.Screen
        name="messages"
        options={
          {
            title: "",
            tabBarAccessibilityLabel: "Messages tab",
            tabBarIcon:({color, size}) => <Feather name="mail" size={size} color={color} /> 
            }} />

      <Tabs.Screen
        name="notifications"
        options={
          {
            title: "",
            tabBarAccessibilityLabel: "Notifications tab",
            tabBarIcon:({color, size}) => <Feather name="bell" size={size} color={color} /> 
          }} />

      <Tabs.Screen
        name="profile"
        options={
          {
            title: "",
            tabBarAccessibilityLabel: "Profile tab",
            tabBarIcon:({color, size}) => <Feather name="user" size={size} color={color} /> 
          }} />
    </Tabs>
  )
}

export default TabsLayout