import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'

export default function App() {
   return (
      <>
         <SafeAreaView style={{flex: 1}}>
            <View style={{backgroundColor: 'blue', padding: 16, marginTop: StatusBar.currentHeight, alignItems: 'center'}}>
               <Text>MeatsToGo Canvas</Text>
            </View>
            <View style={{backgroundColor: 'red', flex: 1,  padding: 10, alignItems: 'center'}}>
               <Text style={{color: 'white'}}>Hello World!</Text>
               <Text style={{color: 'white'}}>Hello World!</Text>
               <Text style={{color: 'white'}}>Hello World!</Text>
               <Text style={{color: 'white'}}>Hello World!</Text>
            </View>
         </SafeAreaView> 
         <ExpoStatusBar style='auto' />
      </>
   )
}

const styles = StyleSheet.create({
})
