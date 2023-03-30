import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function App() {
   return (
      <SafeAreaView style={{flex: 1}}>
         <View style={{backgroundColor: 'blue', padding: 16, alignItems: 'center'}}>
            <Text>MeatsToGo Canvas</Text>
         </View>
         <View style={{backgroundColor: 'red', flex: 1,  padding: 10, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Hello World!</Text>
            <Text style={{color: 'white'}}>Hello World!</Text>
            <Text style={{color: 'white'}}>Hello World!</Text>
            <Text style={{color: 'white'}}>Hello World!</Text>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
})
