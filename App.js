import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'

export default function App() {
   return (
      <>
         <SafeAreaView style={styles.container}>
            <View style={styles.search}>
               <Text>MeatsToGo Canvas</Text>
            </View>
            <View style={styles.list}>
               <Text style={styles.listItem}>Hello World!</Text>
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
      alignItems: 'center',
   },
   list: { backgroundColor: 'red', flex: 1, padding: 10, alignItems: 'center' },
   listItem: { color: 'white' },
})
