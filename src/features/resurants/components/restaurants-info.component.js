import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'

export const RestaurantInfo = (restaurant = {}) => {
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
      <Card style={styles.cardBody}>
         <Card.Title title={name} titleStyle={styles.title} />
         <Card.Content>
            <Paragraph style={styles.content}>{address}</Paragraph>
         </Card.Content>
         <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
   )
}

const styles = StyleSheet.create({
   title: { color: 'white', fontWeight: 'bold' },
   content: { color: 'white' },
   cardBody: { backgroundColor: 'black' },
})
