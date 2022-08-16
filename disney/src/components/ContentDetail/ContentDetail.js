import React from 'react'
import { CardContainer } from './styles'

const ContentDetail = ({title,resume}) => {
  return (
    <CardContainer>
      <h1>{title}</h1>
      <p>{resume}</p>
      
    </CardContainer>
  )
}

export default ContentDetail