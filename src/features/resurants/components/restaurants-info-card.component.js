import React from 'react'
import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'

/* padding: 10px; */
const RestaurantCard = styled(Card)`
   background: ${(props) => props.theme.colors.bg.primary};
   margin: ${(props) => props.theme.space[2]};
   padding: ${(props) => props.theme.space[3]};
`
const Title = styled(Text)`
   font-family: ${(props) => props.theme.fonts.body};
   color: ${(props) => props.theme.colors.text.primary};
   font-weight: ${(props) => props.theme.fontWeights.bold};
   text-align: center;
   font-size: ${(props) => props.theme.fontSizes.title};
   padding-bottom: ${(props) => props.theme.space[1]};
`
const Address = styled(Text)`
   font-family: ${(props) => props.theme.fonts.body};
   font-size: ${(props) => props.theme.fontSizes.caption};
   color: ${(props) => props.theme.colors.text.primary};
   text-align: center;
`
const Info = styled(View)`
   padding: ${(props) => props.theme.space[4]};
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
         <Card.Cover source={{ uri: photos[0] }} />
         <Info>
            <Title>{name}</Title>
            <Address>{address}</Address>
         </Info>
      </RestaurantCard>
   )
}