import React, { useState } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'

export default function App() {
   const [searchQuery, setSearchQuery] = useState(null)

   return (
      <>
         <SafeAreaView style={styles.container}>
            <View style={styles.search}>
               <Searchbar
                  placeholder="Search"
                  onChangeText={(text) => setSearchQuery(text)}
                  value={searchQuery}
               />
            </View>
            <View style={styles.list}>
               <Text style={styles.listItem}>{searchQuery}</Text>
               <Text style={styles.listItem}>Hello World!</Text>
               <Text style={styles.listItem}>Hello World!</Text>
               <Text style={styles.listItem}>Hello World!</Text>
            </View>
         </SafeAreaView>
         <ExpoStatusBar style="auto" />
      </>
   )
}

const styles = StyleSheet.create({
   container: { flex: 1 },
   search: {
      backgroundColor: 'blue',
      padding: 16,
      marginTop: StatusBar.currentHeight,
   },
   list: { backgroundColor: 'red', flex: 1, padding: 10, alignItems: 'center' },
   listItem: { color: 'white' },
})
