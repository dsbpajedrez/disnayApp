import React from 'react'
import CardCategory from '../CardCategory/CardCategory'
import { Container, Redirection } from './styles'



const CardsCategories = () => {
 const images =[
  'https://yt3.ggpht.com/ytc/AMLnZu8pJTWJOEFHyPsqCcU50Z7J6CBNh-GtIrK__FQRGg=s900-c-k-c0x00ffffff-no-rj',
  'https://cdnb.artstation.com/p/assets/images/images/029/700/321/large/semrram-gonzalez-dc-logo.jpg?1598376808'
 ]
  return (
    <Container>
    {images.map((card,idx)=> {
      return (
      <Redirection to={`/${idx+1}`} key={card}>
        <CardCategory  image={card}/>
      </Redirection> )
    }
    )}
     
    </Container>
  )
}

export default CardsCategories