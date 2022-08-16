import React from 'react'
import CardCategory from '../CardCategory/CardCategory'
import { Container, Redirection } from './styles'

const CardsCategories = () => {
  return (
    <Container>
    {[1,2,3,4,5].map(card=> {
      return (<Redirection to={`/${card}`}>
        <CardCategory key={card}/>
      </Redirection> )
    }
    )}
     
    </Container>
  )
}

export default CardsCategories