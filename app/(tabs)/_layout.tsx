import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { useColorScheme } from '@/hooks/useColorScheme';
import HomeHeader from '@/components/headers/HomeHeader';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        headerShown: true,
        tabBarStyle: {
          paddingVertical: 8,
          height: 60
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? Colors.primary : Colors.secondary} />
          ),
          header: () => <HomeHeader/>,
        
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Category',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name='list' size={24} color={focused ? Colors.primary : Colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={24} color={focused ? Colors.primary : Colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? Colors.primary : Colors.secondary} />
          ),
        }}
      />
    </Tabs>
  );
}
