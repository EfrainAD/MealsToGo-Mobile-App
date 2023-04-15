import React, { useContext, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'

import { RestaurantInfoCard } from '../components/restaurants-info-card.component'
import { SafeArea } from '../../../components/utilities/safeArea.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const SearchbarContainer = styled(View)`
   background-color: ${(props) => props.theme.colors.brand.primary};
   padding: ${(props) => props.theme.space[3]};
`
const RestaurantList = styled(FlatList).attrs({
   contentContainerStyle: { padding: 16 },
})``

export const RestaurantsScreen = () => {
   const [searchQuery, setSearchQuery] = useState(null)
   const RestaurantContext = useContext(RestaurantsContext)

   return (
      <SafeArea>
         <SearchbarContainer>
            <Searchbar
               placeholder="Search"
               onChangeText={(text) => setSearchQuery(text)}
               value={searchQuery}
            />
         </SearchbarContainer>
         <RestaurantList
            data={RestaurantContext.restaurants}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={(item) => item.name}
         />
      </SafeArea>
   )
}
