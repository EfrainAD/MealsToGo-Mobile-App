import React from 'react'
import styled, { useTheme } from 'styled-components/native'

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

const SpacerView = styled.View`
   ${({ variant }) => variant}
`

export const Spacer = ({ position, size, children }) => {
   const theme = useTheme()
   const variant = getVariant(position, size, theme)

   return <SpacerView variant={variant}>{children}</SpacerView>
}
