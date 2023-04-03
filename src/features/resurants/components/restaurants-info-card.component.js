import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

/* padding: 10px; */
const RestaurantCard = styled(Card)`
   background: ${(props) => props.theme.colors.brand.primary};
   margin: ${(props) => props.theme.space[2]};
   padding: ${(props) => props.theme.space[0]}
      ${(props) => props.theme.space[3]};
`
const Title = styled(Text)`
   color: ${(props) => props.theme.colors.text.primary};
   font-weight: bold;
   text-align: center;
   font-size: ${(props) => props.theme.fontSizes.title};
   padding: ${(props) => props.theme.space[3]};
`
const Content = styled(Text)`
   color: ${(props) => props.theme.colors.text.primary};
   padding: ${(props) => props.theme.space[3]};
   text-align: center;
`

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
      <RestaurantCard elevation={5}>
         <Title>{name}</Title>
         <Card.Cover source={{ uri: photos[0] }} />
         <Content>{address}</Content>
      </RestaurantCard>
   )
}
