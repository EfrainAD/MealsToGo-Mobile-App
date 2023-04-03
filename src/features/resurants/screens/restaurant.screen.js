import React, { useState } from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import { RestaurantInfoCard } from '../components/restaurants-info-card.component'

const Container = styled(SafeAreaView)`
   flex: 1;
`
const SearchbarContainer = styled(View)`
   background-color: ${(props) => props.theme.colors.brand.primary};
   padding: ${(props) => props.theme.space[3]};
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`
const ListContainer = styled(View)`
   background-color: ${(props) => props.theme.colors.ui.secondary};
   flex: 1;
   padding: ${(props) => props.theme.space[2]};
   align-items: center;
`

export const RestaurantsScreen = () => {
   const [searchQuery, setSearchQuery] = useState(null)

   return (
      <Container>
         <SearchbarContainer>
            <Searchbar
               placeholder="Search"
               onChangeText={(text) => setSearchQuery(text)}
               value={searchQuery}
            />
         </SearchbarContainer>
         <ListContainer>
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
            <RestaurantInfoCard />
         </ListContainer>
      </Container>
   )
}
