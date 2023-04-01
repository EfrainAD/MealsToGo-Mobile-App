import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export const RestaurantInfoCard = (restaurant = {}) => {
   const {
      name = 'Some Restaurant',
      icon,
      photos = [
         'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address = '100 some random street',
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily,
   } = restaurant

   return (
      <Card elevation={5} style={styles.card}>
         <Card.Title title={name} titleStyle={styles.title} />
         <Card.Cover source={{ uri: photos[0] }} />
         <Text style={styles.text}>{address}</Text>
      </Card>
   )
}

const styles = StyleSheet.create({
   title: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
   text: { color: 'white', padding: 15, textAlign: 'center' },
   card: { backgroundColor: 'black', margin: 15, paddingHorizontal: 10 },
})
