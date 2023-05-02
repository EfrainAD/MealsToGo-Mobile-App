import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components'

import { RestaurantInfoCard } from '../components/restaurants-info-card.component'
import { SafeArea } from '../../../components/utilities/safeArea.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { ActivityIndicator } from 'react-native-paper'
import Search from '../components/search.component'

const RestaurantList = styled(FlatList).attrs({
   contentContainerStyle: { padding: 16 },
})``
const Loading = styled(ActivityIndicator)`
   margin-left: -25px;
`
const LoadingContainer = styled(View)`
   position: absolute;
   top: 50%;
   left: 50%;
`
export const RestaurantsScreen = () => {
   const { restaurants, isLoading, error } = useContext(RestaurantsContext)

   return (
      <SafeArea>
         <Search />
         {isLoading ? (
            <LoadingContainer>
               <Loading size="large" />
            </LoadingContainer>
         ) : (
            <RestaurantList
               data={restaurants}
               renderItem={({ item }) => (
                  <RestaurantInfoCard restaurant={item} />
               )}
               keyExtractor={(item) => item.name}
            />
         )}
      </SafeArea>
   )
}
