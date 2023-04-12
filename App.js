import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { RestaurantsScreen } from './src/features/resurants/screens/restaurant.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import {
   useFonts as useOswald,
   Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

function MapsScreen() {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Maps!</Text>
      </View>
   )
}

function SettingsScreen() {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Settings!</Text>
      </View>
   )
}
const Tab = createBottomTabNavigator()

export default function App() {
   const [oswaldLoaded] = useOswald({ Oswald_400Regular })
   const [latoLoaded] = useLato({ Lato_400Regular })
   if (!oswaldLoaded || !latoLoaded) return null

   return (
      <>
         <ThemeProvider theme={theme}>
            <NavigationContainer>
               <Tab.Navigator>
                  <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
                  <Tab.Screen name="Maps" component={MapsScreen} />
                  <Tab.Screen name="Settings" component={SettingsScreen} />
               </Tab.Navigator>
            </NavigationContainer>
         </ThemeProvider>
         <ExpoStatusBar style="auto" />
      </>
   )
}
