import React, { useContext, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'

import { RestaurantInfoCard } from '../components/restaurants-info-card.component'
import { SafeArea } from '../../../components/utilities/safeArea.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { ActivityIndicator } from 'react-native-paper'
import { theme } from '../../../infrastructure/theme'

const SearchbarContainer = styled(View)`
   background-color: ${(props) => props.theme.colors.brand.primary};
   padding: ${(props) => props.theme.space[3]};
`
const RestaurantList = styled(FlatList).attrs({
   contentContainerStyle: { padding: 16 },
})``

export const RestaurantsScreen = () => {
   const [searchQuery, setSearchQuery] = useState(null)
   const { restaurants, isLoading, error } = useContext(RestaurantsContext)
   console.log(error)

   return (
      <SafeArea>
         <SearchbarContainer>
            <Searchbar
               placeholder="Search"
               onChangeText={(text) => setSearchQuery(text)}
               value={searchQuery}
            />
         </SearchbarContainer>
         {isLoading ? (
            <ActivityIndicator animating={isLoading} size="large" />
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
