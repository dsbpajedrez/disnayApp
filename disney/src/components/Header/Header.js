import React from 'react'
import { Container, Image, LeftSide, Paragraph } from './styles'
import disenyIcon from '../../assests/disney-icon.svg'
import { Link } from 'react-router-dom'
import { credential } from '../../credentials/Credentials'
import { getAuth, signOut } from 'firebase/auth'
import { useContext } from 'react'
import { ctxUser } from '../ContextUser/ContextUser'
const auth = getAuth(credential);
const Header = () => {
  const {user, setUser} = useContext(ctxUser)
  const toSignOut=(arg)=>{
    setUser('')
    signOut(arg)
  }
  return (
    <Container>
      <Link to='/'>
        <Image src={disenyIcon}/>        
      </Link>
      <LeftSide>
        <Paragraph>{user?user:'Guest'}</Paragraph>
        {user!=''?<button onClick={()=> toSignOut(auth)}>Logout</button>:<></> }
        
        
      </LeftSide>
    </Container>
  )
}

export default Header