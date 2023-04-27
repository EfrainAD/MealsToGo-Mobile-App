import React, { createContext, useState, useEffect, useContext } from 'react'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'
import { LocationContext } from '../location/location.context'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
   const [restaurants, setRestaurants] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)
   const { location } = useContext(LocationContext)

   useEffect(() => {
      const retrieveRestaunts = () => {
         setIsLoading(true)

         setTimeout(() => {
            const locationString = location.lat + ',' + location.lng

            restaurantsRequest(locationString)
               .then(restaurantsTransform)
               .then((results) => {
                  setIsLoading(false)
                  setRestaurants(results)
               })
               .catch((err) => {
                  setIsLoading(false)
                  setError(err)
               })
         }, 2000)
      }
      if (location) retrieveRestaunts()
   }, [location])

   return (
      <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
         {children}
      </RestaurantsContext.Provider>
   )
}
