import React from 'react'
import CardCategory from '../CardCategory/CardCategory'
import { Container, Redirection } from './styles'



const CardsCategories = () => {
 const images =[
  'https://yt3.ggpht.com/ytc/AMLnZu8pJTWJOEFHyPsqCcU50Z7J6CBNh-GtIrK__FQRGg=s900-c-k-c0x00ffffff-no-rj',
  'https://cdnb.artstation.com/p/assets/images/images/029/700/321/large/semrram-gonzalez-dc-logo.jpg?1598376808',
  'https://concepto.de/wp-content/uploads/2018/09/comedia-e1536069171944.jpg',
  'https://i0.wp.com/www.teatroromea.es/Imagenes/Noticias/tyll5nzj2s1MH-Rey-Leonor-1-med.jpg',
  'https://es.web.img3.acsta.net/newsv7/21/12/17/10/40/0035548.jpg'
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