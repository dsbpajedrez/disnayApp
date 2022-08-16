import React from 'react'
import { Container, Image } from './styles'
import disenyIcon from '../../assests/disney-icon.svg'
const Header = () => {
  return (
    <Container>
      <Image src={disenyIcon}/>
    </Container>
  )
}

export default Header