import React from 'react'
import { MainProjectContainer } from './styles'

const LayOut = ({children}) => {
  return (
    <MainProjectContainer>
     {children}
    </MainProjectContainer>
  )
}

export default LayOut