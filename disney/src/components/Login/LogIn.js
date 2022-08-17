import React, {useState} from 'react'

import 'firebase/auth'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { credential } from '../../credentials/Credentials';
import Boton from '../../estilosComunes/BotonLogIn'
import { Container, FormularioLogIn, Input, Label, Titulo } from './styles'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth(credential)
console.log(auth);
  const submit =async(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
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
      </FormularioLogIn>
    </Container>
  )
}

export default Login