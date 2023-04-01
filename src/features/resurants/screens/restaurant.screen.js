import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from '../components/restaurants-info-card.component'

export const RestaurantsScreen = () => {
   const [searchQuery, setSearchQuery] = useState(null)

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.search}>
            <Searchbar
               placeholder="Search"
               onChangeText={(text) => setSearchQuery(text)}
               value={searchQuery}
            />
         </View>
         <View style={styles.list}>
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
         </View>
      </SafeAreaView>
   )
}
const styles = StyleSheet.create({
   container: { flex: 1 },
   search: {
      backgroundColor: 'blue',
      padding: 16,
      marginTop: StatusBar.currentHeight,
   },
   list: {
      backgroundColor: 'red',
      flex: 1,
      padding: 10,
      alignItems: 'center',
   },
})
