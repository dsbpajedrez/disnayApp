import React from 'react'
import { Container, Image, LeftSide } from './styles'
import disenyIcon from '../../assests/disney-icon.svg'
const Header = () => {
  return (
    <Container>
      <Image src={disenyIcon}/>
      <LeftSide>
        <p>davidbenjumea@homail.com</p>
      </LeftSide>
    </Container>
  )
}

export default Header