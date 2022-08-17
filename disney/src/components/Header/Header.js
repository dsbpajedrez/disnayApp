import React from 'react'
import { Container, Image, LeftSide, Paragraph } from './styles'
import disenyIcon from '../../assests/disney-icon.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <Image src={disenyIcon}/>        
      </Link>
      <LeftSide>
        <Paragraph>davidbenjumea@homail.com</Paragraph>
      </LeftSide>
    </Container>
  )
}

export default Header