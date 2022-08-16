import React from 'react'
import { Container, Item, List, Redirection } from './styles'

const LinksSideBar = () => {
  return (
    <Container>
      <List>
        <Item><Redirection to='/'>Home</Redirection></Item>
      </List>
    </Container>
  )
}

export default LinksSideBar