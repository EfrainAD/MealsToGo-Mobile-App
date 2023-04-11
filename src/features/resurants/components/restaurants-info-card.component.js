import React from 'react'
import styled from 'styled-components'
import { SvgXml } from 'react-native-svg'
import { Image, View } from 'react-native'
import { Card } from 'react-native-paper'
import star from '../../../../assets/star.js'
import open from '../../../../assets/open.js'
import { Spacer } from '../../../components/spacer/spacer.component.js'
import { Text } from '../../../components/typograghy/text.component.js'

/* padding: 10px; */
const RestaurantCard = styled(Card)`
   background: ${(props) => props.theme.colors.bg.primary};
   margin: ${(props) => props.theme.space[2]};
   padding: ${(props) => props.theme.space[3]};
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
const SectionRow = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   margin: ${(props) => props.theme.space[2]} 0;
`
const RestaurantStatusContainer = styled(View)`
   flex-direction: row;
   justify-content: space-between;
`
const Icon = styled(Image)`
   width: 20;
   height: 20;
`

export const RestaurantInfoCard = (restaurant = {}) => {
   const {
      name = 'Some Restaurant',
      icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
      photos = [
         'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
      ],
      address = '100 some random street',
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily = true,
   } = restaurant

   const starRating = Array.from({ length: Math.floor(rating) }, (_, index) => (
      <SvgXml key={index} xml={star} width={20} height={20} />
   ))

   return (
      <RestaurantCard elevation={5}>
         <Card.Cover source={{ uri: photos[0] }} />
         <Info>
            <Text variant="label">{name}</Text>
            {isClosedTemporarily && (
               <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <SectionRow>
               <Rating>{starRating}</Rating>
               <RestaurantStatusContainer>
                  {isOpenNow && (
                     <Spacer position="left" size="medium">
                        <SvgXml xml={open} width={15} height={15} />
                     </Spacer>
                  )}
                  {icon && (
                     <Spacer position="left" size="medium">
                        <Icon source={{ uri: icon }} />
                     </Spacer>
                  )}
               </RestaurantStatusContainer>
            </SectionRow>
            <Address>{address}</Address>
         </Info>
      </RestaurantCard>
   )
}
