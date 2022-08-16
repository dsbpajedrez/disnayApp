import React from 'react'
import { Container, Item, List, Redirection } from './styles'

const LinksSideBar = () => {
  return (
    <Container>
      <List>
        <Item><Redirection to='/'>Home</Redirection></Item>
        <Item><Redirection to='/1'>Marvel Studios</Redirection></Item>
        <Item><Redirection to='/2'>DC</Redirection></Item>
        <Item><Redirection to='/2'>Comedia</Redirection></Item>
        <Item><Redirection to='/2'>Acción</Redirection></Item>
        <Item><Redirection to='/2'>Drama</Redirection></Item>
      </List>
    </Container>
  )
}

export default LinksSideBar