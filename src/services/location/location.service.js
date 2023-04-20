import camelize from 'camelize'
import { locations } from './location.mock'

export const locationRequest = (searchTerm) => {
   return new Promise((resolve, reject) => {
      const locationMocks = locations[searchTerm]
      if (!locationMocks) reject('not found')
      console.log('sending alog', locationMocks)
      resolve(locationMocks)
   })
}

export const locationTransform = (result) => {
   const { lat, lng } = camelize(result).results[0].geometry.location
   return { lat, lng }
}
