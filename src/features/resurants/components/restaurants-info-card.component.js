import React from 'react'
import styled from 'styled-components'
import { SvgXml } from 'react-native-svg'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import star from '../../../../assets/star.js'
import open from '../../../../assets/open.js'

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
const Rating = styled(View)`
   flex-direction: row;
   justify-content: center;
`
const Row = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   margin: ${(props) => props.theme.space[2]} 0;
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

   const starRating = Array.from({ length: Math.floor(rating) }, (_, index) => (
      <SvgXml key={index} xml={star} width={20} height={20} />
   ))

   return (
      <RestaurantCard elevation={5}>
         <Card.Cover source={{ uri: photos[0] }} />
         <Info>
            <Title>{name}</Title>
            <Row>
               <Rating>{starRating}</Rating>
               {isOpenNow && <SvgXml xml={open} width={15} height={15} />}
            </Row>
            <Address>{address}</Address>
         </Info>
      </RestaurantCard>
   )
}
