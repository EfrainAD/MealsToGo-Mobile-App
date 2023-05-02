import React, { createContext, useEffect, useState } from 'react'
import { locationRequest, locationTransform } from './location.service.js'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
   const [keyword, setKeyword] = useState('san francisco')
   const [location, setLocation] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)

   const onSearch = (searchKeyword) => {
      setIsLoading(true)
      setKeyword(searchKeyword)
   }

   useEffect(() => {
      if (!keyword.length) return

      locationRequest(keyword.toLowerCase())
         .then(locationTransform)
         .then(setLocation)
         .catch(setError)
         .finally(() => setIsLoading(false))
   }, [keyword])

   return (
      <LocationContext.Provider
         value={{
            location,
            keyword,
            isLoading,
            error,
            search: onSearch,
         }}
      >
         {children}
      </LocationContext.Provider>
   )
}
