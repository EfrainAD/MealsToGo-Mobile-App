import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function App() {
   return (
      <SafeAreaView style={{flex: 1}}>
         <View style={{backgroundColor: 'blue', flex: 0.1, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>MeatsToGo Canvas</Text>
         </View>
         <View style={{backgroundColor: 'red', flex: 0.9, alignItems: 'center'}}>
            <Text tyle={{color: 'blue'}}>Hello World!</Text>
            <Text tyle={{color: 'blue'}}>Hello World!</Text>
            <Text tyle={{color: 'blue'}}>Hello World!</Text>
            <Text tyle={{color: 'blue'}}>Hello World!</Text>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
})
