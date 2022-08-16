import React from 'react'
import CardsCategories from '../CardsCategories/CardsCategories'
import LinksSideBar from '../LinksSideBar/LinksSideBar'
import { Container } from './styles'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import ContentCategory from '../ContentCategory/ContentCategory'
import ContentDetail from '../ContentDetail/ContentDetail'

const Home = () => {
  return (
    <BrowserRouter>
    <Container>
      <LinksSideBar/>      
      <Routes>
        <Route exact path='/' element={ <CardsCategories/>}/>
        <Route exact path='/:id' element={<ContentCategory/>}/>
        <Route exact path='/movieDetail/:id' element={<ContentDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>      
    </Container>
    </BrowserRouter>
  )
}

export default Home