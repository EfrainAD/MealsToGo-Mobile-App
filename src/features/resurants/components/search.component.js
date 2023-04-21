import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/location/location.context'

const SearchbarContainer = styled(View)`
   background-color: ${(props) => props.theme.colors.brand.primary};
   padding: ${(props) => props.theme.space[3]};
`

const Search = () => {
   const { keyword, search } = useContext(LocationContext)
   const [searchKeyword, setSearchKeyword] = useState(keyword)

   // useEffect(() => {
   //    search(searchKeyword)
   // })

   return (
      <SearchbarContainer>
         <Searchbar
            placeholder="Search"
            value={searchKeyword}
            onChangeText={(text) => setSearchKeyword(text)}
            onSubmitEditing={() => search(searchKeyword)}
         />
      </SearchbarContainer>
   )
}

export default Search
