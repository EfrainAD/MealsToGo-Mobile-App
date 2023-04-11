import styled from 'styled-components'
import { Image, View } from 'react-native'
import { Card } from 'react-native-paper'
import { Text } from '../../../components/typograghy/text.component.js'

export const RestaurantCard = styled(Card)`
   background: ${(props) => props.theme.colors.bg.primary};
   margin: ${(props) => props.theme.space[2]};
   padding: ${(props) => props.theme.space[3]};
`
export const Address = styled(Text)`
   font-family: ${(props) => props.theme.fonts.body};
   font-size: ${(props) => props.theme.fontSizes.caption};
   color: ${(props) => props.theme.colors.text.primary};
   text-align: center;
`
export const Info = styled(View)`
   padding: ${(props) => props.theme.space[4]};
`
export const Rating = styled(View)`
   flex-direction: row;
   justify-content: center;
`
export const SectionRow = styled(View)`
   flex-direction: row;
   justify-content: space-between;
   margin: ${(props) => props.theme.space[2]} 0;
`
export const RestaurantStatusContainer = styled(View)`
   flex-direction: row;
   justify-content: space-between;
`
export const Icon = styled(Image)`
   width: 20;
   height: 20;
`
