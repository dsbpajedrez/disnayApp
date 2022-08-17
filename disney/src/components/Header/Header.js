import React from 'react'
import { ButtonLogOut, Container, Image, LeftSide, Paragraph } from './styles'
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
        {user!=''?<ButtonLogOut onClick={()=> toSignOut(auth)}>Logout</ButtonLogOut>:<></> }
        
        
      </LeftSide>
    </Container>
  )
}

export default Header