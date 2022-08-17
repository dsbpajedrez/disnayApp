import React from 'react'
import { Container, Image, LeftSide, Paragraph } from './styles'
import disenyIcon from '../../assests/disney-icon.svg'
import { Link } from 'react-router-dom'
import { credential } from '../../credentials/Credentials'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(credential);
const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <Image src={disenyIcon}/>        
      </Link>
      <LeftSide>
        <Paragraph>davidbenjumea@homail.com</Paragraph>
        <button onClick={()=> signOut(auth)}>Logout</button>
      </LeftSide>
    </Container>
  )
}

export default Header