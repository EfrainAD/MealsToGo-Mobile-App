import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

const sizeVariant = {
   small: 1,
   medium: 2,
   large: 3,
}
const positionVariant = {
   top: 'marginTop',
   left: 'marginLeft',
   right: 'marginRight',
   bottom: 'marginBottom',
}

const getVariant = (position, size, theme) => {
   const positionInCss = positionVariant[position]
   const valueInCss = theme.space[sizeVariant[size]]

   return `${positionInCss}: ${valueInCss};`
}

export const Spacer = styled(View)`
   ${({ position = 'top', size = 'small', theme }) =>
      getVariant(position, size, theme)}
`
