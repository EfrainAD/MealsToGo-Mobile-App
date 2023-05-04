import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
import { SafeArea } from './../../components/utilities/safeArea.component'
import { Ionicons } from '@expo/vector-icons'
import { theme } from './../theme'
import { RestaurantsNavigator } from './restaurants.navigator'

const Tab = createBottomTabNavigator()

const TAB_ICONS = {
   Restaurant: 'md-restaurant',
   Maps: 'map',
   Settings: 'md-settings',
}

function MapsScreen() {
   return (
      <SafeArea
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <Text>Maps!</Text>
      </SafeArea>
   )
}
function SettingsScreen() {
   return (
      <SafeArea
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <Text>Settings!</Text>
      </SafeArea>
   )
}

const screenOptions = ({ route }) => ({
   tabBarIcon: ({ color, size }) => {
      const iconName = TAB_ICONS[route.name]

      return <Ionicons name={iconName} size={size} color={color} />
   },
   tabBarActiveTintColor: theme.colors.ui.primary,
   tabBarInactiveTintColor: theme.colors.ui.secondary,
   headerShown: false,
})

export const AppNavigator = () => {
   return (
      <NavigationContainer>
         <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
            <Tab.Screen name="Maps" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   )
}
