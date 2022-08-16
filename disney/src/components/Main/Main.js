import React from 'react'
import CardsCategories from '../CardsCategories/CardsCategories'
import LinksSideBar from '../LinksSideBar/LinksSideBar'
import { Container } from './styles'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

const Main = () => {
  return (
    <BrowserRouter>
    <Container>
      <LinksSideBar/>      
      <Routes>
        <Route exact path='/' element={ <CardsCategories/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>      
    </Container>
    </BrowserRouter>
  )
}

export default Main