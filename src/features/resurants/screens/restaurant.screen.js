import React, { useState } from 'react'
import {
   SafeAreaView,
   FlatList,
   View,
   StatusBar,
   StyleSheet,
} from 'react-native'
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
         <FlatList
            data={[
               { name: 0 },
               { name: 1 },
               { name: 2 },
               { name: 3 },
               { name: 4 },
               { name: 5 },
               { name: 6 },
               { name: 7 },
               { name: 8 },
               { name: 9 },
               { name: 10 },
               { name: 11 },
               { name: 12 },
               { name: 13 },
               { name: 14 },
               { name: 15 },
               { name: 16 },
               { name: 17 },
               { name: 18 },
               { name: 19 },
            ]}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.flatList}
         />
      </Container>
   )
}

const styles = StyleSheet.create({
   flatList: { padding: 16 },
})
