import React, {useState, useContext} from 'react'

import 'firebase/auth'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { credential } from '../../credentials/Credentials';
import { ctxUser } from '../ContextUser/ContextUser';
import Boton from '../../estilosComunes/BotonLogIn'
import { Container, FormularioLogIn, Input, Label, Titulo, Redirection } from './styles'


const Login = () => {
  let {setUser} = useContext(ctxUser)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth(credential)  

  const submit =(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
      .then(log=>{
        console.log(log);
      }).catch(e=>{
        setUser(null)
        alert('No tienes cuenta, crea una !')
        })
    
    setUser(email)    
  }

  return (
    <Container>
      <FormularioLogIn>
      <Titulo>Inicia sesión</Titulo>
        <Label>Email</Label>
        <Input type='email' name='email' onChange={event=>setEmail(event.target.value)} />
        <Label>Contraseña</Label>
        <Input type='password' name='password'onChange={event=>setPassword(event.target.value)} />
        <Boton onClick={event =>submit(event)} texto='LogIn' width='50%' style={{marginTop:'3rem'}}/>
        <Redirection to='/register' >No tienes cuenta?, click acá!</Redirection>
      </FormularioLogIn>
    </Container>
  )
}

export default Login