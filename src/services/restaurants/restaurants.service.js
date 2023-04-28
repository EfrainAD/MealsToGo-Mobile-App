import { mocks, mockImages } from './mock'
import camelize from 'camelize'

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
   return new Promise((resolve, reject) => {
      const mockLocation = mocks[location]

      if (!mockLocation) {
         reject('Not Found')
      }
      resolve(mockLocation)
   })
}

export const restaurantsTransform = ({ results = [] }) => {
   const mappedResults = results.map((restaurant) => {
      restaurant.photos = restaurant.photos.map((_) => {
         return mockImages[Math.floor(Math.random() * mockImages.length)]
      })

      return {
         ...restaurant,
         address: restaurant.vicinity,
         isOpenNow:
            restaurant.opening_hours && restaurant.opening_hours.open_now,
         isClosedTemporarily:
            restaurant.business_status === 'CLOSED_TEMPORARILY',
      }
   })
   return camelize(mappedResults)
}
