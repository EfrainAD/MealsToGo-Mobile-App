import { mocks } from './mock'

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
   return new Promise((resolve, reject) => {
      const mockLocation = mocks[location]

      if (!mockLocation) {
         reject('Not Found')
      }
      resolve(mockLocation)
   })
}
